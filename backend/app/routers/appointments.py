from typing import Any

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field

from app.db.mongo import appointments_collection

router = APIRouter()


class AppointmentCreate(BaseModel):
    client_name: str = Field(..., min_length=2)
    service: str = Field(..., min_length=2)
    time: str
    status: str = 'pending'


class AppointmentOut(BaseModel):
    id: str | None = None
    client_name: str
    service: str
    time: str
    status: str


@router.get('/appointments', response_model=list[AppointmentOut])
def list_appointments() -> list[dict[str, Any]]:
    items = list(appointments_collection.find({}, {'_id': 0}))
    return items


@router.post('/appointments', response_model=AppointmentOut, status_code=status.HTTP_201_CREATED)
def create_appointment(payload: AppointmentCreate) -> dict[str, str]:
    appointment = payload.model_dump()
    result = appointments_collection.insert_one(appointment)

    if not result.inserted_id:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail='Unable to create appointment')

    appointment['id'] = str(result.inserted_id)
    return appointment

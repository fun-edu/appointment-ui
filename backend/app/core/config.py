from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = 'Appointment API'
    mongodb_uri: str = 'mongodb://localhost:27017/appointment_db'
    database_name: str = 'appointment_db'

    model_config = SettingsConfigDict(env_file='.env', case_sensitive=False)


settings = Settings()

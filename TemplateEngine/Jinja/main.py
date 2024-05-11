from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates

app = FastAPI()

templates = Jinja2Templates(directory="templates")

@app.get('/')
async def name(request: Request):
    return templates.TemplateResponse("home.html", {"request": request, "name":"Jinja2Project from Backend"})
FROM python:3.7
WORKDIR /code
EXPOSE 8000
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD ["python","login.py"]
FROM python:3.7-alpine
WORKDIR /database
RUN pip install mysql-connector
COPY . .
CMD ["python","create_table.py"]
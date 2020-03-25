FROM python:3.7-alpine
WORKDIR /code
ENV FLASK_APP login.py
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_RUN_PORT 8000
RUN apk add --no-cache gcc libc-dev make git libffi-dev openssl-dev python3-dev libxml2-dev libxslt-dev
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD ["flask","run"]
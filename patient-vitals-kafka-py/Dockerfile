FROM python:3.9

# set working directory
WORKDIR /app

# copy requirements file
COPY requirements.txt .

# install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# copy source code
COPY . .


# command to run when container starts
CMD ["python", "main.py"]
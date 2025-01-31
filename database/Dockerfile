FROM postgres:13.0

ENV POSTGRES_USER=cc_app
ENV POSTGRES_PASSWORD=secret-for-development
ENV POSTGRES_DB=color-capture-db

COPY ccdb.sql /docker-entrypoint-initdb.d/
FROM python:3.4
MAINTAINER Richard Olsson <r@richardolsson.se>

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update
RUN apt-get install -q -y --force-yes --fix-missing python3-dev python3-pip
RUN apt-get install -q -y --force-yes libpq-dev
RUN apt-get install -q -y --force-yes git
RUN apt-get install -q -y --force-yes gettext

RUN apt-get update \
    && apt-get install -y \
        curl \
        libxrender1 \
        libfontconfig \
        libxtst6 \
        xz-utils

RUN curl "https://downloads.wkhtmltopdf.org/0.12/0.12.4/wkhtmltox-0.12.4_linux-generic-amd64.tar.xz" -L -o "wkhtmltopdf.tar.xz"
RUN tar Jxvf wkhtmltopdf.tar.xz
RUN mv wkhtmltox/bin/wkhtmltopdf /usr/local/bin/wkhtmltopdf
RUN mv wkhtmltox/bin/wkhtmltoimage /usr/local/bin/wkhtmltoimage

RUN pip3 install Flask==0.12.2 pdfkit imgkit

RUN apt-get clean && rm -rf /var/lib/opt/lists/* /tmp/* /var/tmp/*

WORKDIR /var/app
ENTRYPOINT ["python"]
CMD ["app.py"]

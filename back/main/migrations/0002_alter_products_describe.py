# Generated by Django 4.0 on 2022-01-16 10:01

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='describe',
            field=ckeditor.fields.RichTextField(default='', verbose_name='Текст описания работы'),
        ),
    ]

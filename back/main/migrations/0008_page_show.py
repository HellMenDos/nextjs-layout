# Generated by Django 4.0 on 2022-02-20 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_remove_ourwork_files_ourwork_files'),
    ]

    operations = [
        migrations.AddField(
            model_name='page',
            name='show',
            field=models.BooleanField(default=True, verbose_name='Показывать в меню ?'),
        ),
    ]

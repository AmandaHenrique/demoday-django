# Generated by Django 2.2.1 on 2019-05-18 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='telefone',
            field=models.CharField(max_length=11),
        ),
    ]
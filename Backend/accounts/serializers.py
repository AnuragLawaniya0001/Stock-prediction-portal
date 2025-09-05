from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password

class Userserializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) 
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user

    def validate_password(self, value):
        """
        Runs the password against all validators defined in settings.py.
        """
        validate_password(value)
        return value
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Function
from .serializers import FunctionSerializer



@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_functions(request):
    functions = Function.objects.all()
    serializer = FunctionSerializer(functions, many=True)
    return Response(serializer.data) 


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_functions(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = FunctionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        equations = Function.objects.filter(user_id=request.user.id)
        serializer = FunctionSerializer(equations, many=True)
        return Response(serializer.data)

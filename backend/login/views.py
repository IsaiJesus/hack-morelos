from django.shortcuts import render
from django.http import HttpResponse
import bcrypt

# Create your views here.
def hello(request):
    return HttpResponse('Hello world')
def hash_password(password):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed
def verify_password(stored_hash, input_password):
    return bcrypt.checkpw(input_password.encode('utf-8'),stored_hash)


def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    import redis
    #username = "TAIJ"
    #password='123456'
    r = redis.Redis(
        host='redis-17982.c261.us-east-1-4.ec2.cloud.redislabs.com',
        port=17982,
        password='7jSsdnZ9wUrYAs1O2xODhSSr13q1U5LL')
    print(hash_password('123456'))
    if r.exists(username):
        real_password = r.hget(username, 'password')
        # print(real_password.decode())
        if verify_password(real_password, password):
            return render(request, 'welcome.html')
        else:
            return render(request, 'index.html')
    else:
        return render(request, 'index.html')


def index(request):
    return render(request, 'index.html')

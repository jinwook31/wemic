from django.shortcuts import render

def main(request):
    return render(request, 'index.html')

def play(request):
    return render(request, 'play.html')
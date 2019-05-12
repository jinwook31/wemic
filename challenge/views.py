from django.shortcuts import render

# Create your views here.

def select_pic(request, chal_or_not):
    if(chal_or_not == '0'):
        return render(request, 'challenge/select_pic.html', {"chal":True})
    else:
        return render(request, 'challenge/select_pic.html', {"chal":False})

def challenge(request, photobooth_id):
    PHOTOBOOTH_ID = photobooth_id
    return render(request, 'challenge/challenge.html', {"PHOTOBOOTH_ID": PHOTOBOOTH_ID})

def photo_mode(request, photobooth_id):
    PHOTOBOOTH_ID = photobooth_id
    return render(request, 'challenge/photo_mode.html', {"PHOTOBOOTH_ID": PHOTOBOOTH_ID})

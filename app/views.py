from django.shortcuts import render
from app.forms import ClienteForm

# Create your views here.
def index(request):
    return render(request, 'index.html')

def cliente_form(request):
    msg = ''
    formulario = ClienteForm(request.POST or None)
    if formulario.is_valid():
        formulario.save()
        formulario = ClienteForm() # para apagar os inputs depois que apertei no submit
        msg = "Solicitação realizada com sucesso"
    
    contexto = {
        'form' : formulario,
        'msg' : msg 
    }

    return render(request, 'index.html', contexto)
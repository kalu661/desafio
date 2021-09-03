
#   Diseñe un
#   programa  que dadas las medidas de los
#   tres lados de un triángulo, lo clasifique según sus ángulos  agudo, obtusángulo o recto.

# Asignacion de valores a cada angulo de un triangulo
print('')
# Solicitar el ingerso de los angulos 
a = int(input('Ingeres el angulo a '));
b = int(input('Ingeres el angulo b '));
c = int(input('Ingeres el angulo c '));


# Verificacion de tipo de triangulo

# Triangulo Agudo
if (a < 90  and b < 90 and c < 90):
    print('Es un triangulo agudo')

# Triangulo Obtusangulo
if (a > 90 and b < 90 and c < 90):
    print('Es un triangulo obtusángulo')
elif (b > 90 and a << 90 and c < 90):
    print('Es un triagunlo obtusángulo')
elif (c > 90 and b < 90 and a < 90):
    print('Es un triangulo obtusángulo')

# Triangulo Recto
if (a == 90 and  b < 90 and c < 90):
    print('Es un triangulo recto')
elif (b == 90 and  a < 90 and c < 90):
    print('Es un triangulo recto')
elif (c == 90 and  b < 90 and a < 90):
    print('Es un triangulo recto ')






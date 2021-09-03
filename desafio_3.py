print('---------------------------------------------')

#Definicion de años
t = int(5);

#Definicion de dominador y denominador
y = float(10*(5+3*t));
x = float(1+0.04*(t));

# Resultado
result = int(y/x)

#Muestra en pantalla
print('Numero de animales luego de 5 años; ', result);
print('---------------------------------------------')

#Definicion de años
t1 = int(10);

#Definicion de dominador y denominador
y1 = float(10*(5+3*t1));
x1 = float(1+0.04*(t1));

#Division de la funcion
result1 = int(y1/x1)

#Muestra en pantalla de años 
print('Numero de animales luego de 10 años: ',result1);
print('-------------------------------------------------------------------')

#Definicion de infinito
tinf = float('inf');

#Definicion de denominador y dominador
y2 = float(10*(5+3*tinf));
x2 = float(1+0.04*(tinf));

#Division de la funcion 
result2 = float(y2/x2)
resultinf = 750
#Muestra en pantalla de años
print('Numero de animales cuando t tiende a infinito: ',result2, '= 750');
print('-------------------------------------------------------------------')

#Peticion de numero a ingresar
time1 = int(input('Ingrese un valor para el año: '));
print('---------------------------------------------')

#Definicion de dominador y denominador
y3 = float(10*(5+3*time1));
x3 = float(1+0.04*(time1));

#Resultado de divison 
result3 = int(y3/x3)

#Muestra en pantalla
print('Numero de animales luego de', time1, 'años: ' , result3);
print('---------------------------------------------')

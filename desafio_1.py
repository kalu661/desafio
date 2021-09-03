print('>-----------------------------------------<')
#Definicion de Variables
palabra = input('Ingrese una palabra ');
palabra1 = int(len(palabra));
palabra2 = int;
palabra3 = int;
es_multiplo = int;
result = int;
a_string = palabra

# Conversion de string a ASCII
ASCII_values = []
for character in a_string:
    ASCII_values.append(ord(character))

# Resolucion de problemas
palabra2 = (palabra1 % 5 == 0);
result = ((+5) - palabra1);

# Muestra en pantalla los resultados
print('>---------------------------------------------------------<');
# Condicion para agregar 4 veces el numero que falta para llegar al multiplo
if (result % 5 == 0): 
    print('Cantidad de letras: ', palabra1);
else:
    print('Cantidad de letras y mas las faltantes: ',palabra,result,result,result,result)
print('>---------------------------------------------------------<');
print('Verificacion si es multiplo de 5: ',palabra2);
print('>---------------------------------------------------------<');
print('Letras restantes para alcanzar el multiplo de 5: ',result);
print('>---------------------------------------------------------<');
print('Valor de cada letra en ASCII: ',ASCII_values);
print('>---------------------------------------------------------<');

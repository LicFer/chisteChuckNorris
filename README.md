si no tienes vue 2.7.16, vuex 3.6.2, axios 1.7.8 y vue-router 3.6.5
instalalos.

como se instalan?

NodeJs - https://nodejs.org/en
para verificar la su instalacion abres cmd y pones
node -v     ---> esto muestra la version instalada de NodeJs.
npm -v	    ---> muestra la version npm (Node Package Manager)
npm install ---> lee el package.json, descarga e instala todas
		 las dependencias, crea o actualiza node_modules
		 y actualiza package-lock.json
		    (en caso de que los tengas)

-instalar vue 2
	npm install -g @vue/cli

-vuex para vue 2
	npm install vuex@3.6.2

-axios para vue 2
	npm install axios@1.7.8

-vue-router para vue 2
	npm install vue-router@3.6.5

-para verificar las dependencias instaladas
	npm list vuex axios vue-router

para abrir el proyecto

se localiza donde este alojado el proyecto (la ruta)
		por ej.
	C:\Users\Fer\VScode\proyectopa>
para correr el servidor
	npm run serve
este genera dos direcciones
  - Local:   http://localhost:8080/
  - Network: http://192.168.1.9:8080/
local & network (da igual cual metas en el navegador)


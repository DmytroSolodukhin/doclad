/**
 * Введение, создание обьектов, что такое камера, сцена и рендеринг
 */

var sun_r = 830, earth_r = 50, cam_poz = 15300, jupiter_r = 450, mars_r = 30, mercury_r = 20, venera_r = 45,
    saturn_r = 400, neptun_r = 200, pluton_r = 10, uran_r = 190, earth_p = 1500, jupiter_p = 4500, mars_p = 2500,
    mercury_p = 900, venera_p = 1200, saturn_p = 6500, neptun_p = 8000, pluton_p = 10500, uran_p = 9500;

//зададим сразу параметры ширины и высоты нашего окна
var W = parseInt(window.innerWidth),
    H = parseInt(window.innerHeight);

//переменые без которых нам не обойтись
var container, camera, scene, renderer;

//наш контейнер
container = $( '#container' );

//Первый параметр (45) определяет вертикальное поле зрения в градусах
// (от нижнего до верхнего края). Это часть наблюдаемого мира, которая
// видна на экране в заданный момент. Горизонтальное поле зрения вычисляется
// с использованием вертикального поля зрения.
//    Второй параметр (window.innerWidth / window.innerHeight) определяет
// пропорции камеры. В качестве пропорций обычно используется отношение ширины
// окна просмотра к его высоте. В противном случае изображение может выглядеть сплющенным.
//    Третий параметр (1) определяет переднюю плоскость видимого пространства
// камеры (на рисунке обозначается словом "Передняя"). В данном случае передняя
// плоскость видимого пространства практически совпадает с плоскостью xy (то есть с экраном).
//Последний параметр (10000..) определяет заднюю плоскость видимого пространства
// ("Задняя" на рисунке). В этом случае, когда объект смещается более чем на +10000000 единиц,
// он выходит за пределы видимого мира Three.js и отсекается от представления.
camera = new THREE.PerspectiveCamera( 45, W/H, 1, 100000 );

//Когда объект Three.js, добавляется в сцену, то ( по умолчанию) он помещается в начало координат
// системы xyz.Поэтому если вы добавите в сцену объект камеры и объект сферы,
// то оба они будут располагаться в точке (0, 0, 0),и вы будете смотреть на сферу изнутри.
camera.position.z = cam_poz;
camera.position.y = 1000;
//camera.rotation.z = -Math.PI/30;
//сцена
scene = new THREE.Scene();

//рендеринг
renderer = doOnLoad();
renderer.setSize( W, H );

//солнце
//фигура, материал, обьект

var sun_geometry = new THREE.SphereGeometry(sun_r,30,30),//размер,долготы, широты
    sun,
//    sun_mater = new THREE.MeshNormalMaterial();//материи
//    sun = new THREE.Mesh( sun_geometry, sun_mater );
//    scene.add(sun);

    loader = new THREE.TextureLoader();
    loader.load( 'images/sun.png', function ( texture ) {
        var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
        sun = new THREE.Mesh( sun_geometry, material );
        scene.add(sun);
    } );

//земля

var earth_geometry = new THREE.SphereGeometry(earth_r,20,20),
    earth;

    loader.load( 'images/earth.jpg', function ( texture ) {
        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
        earth = new THREE.Mesh( earth_geometry, material );
        earth.castShadow = true;
        earth.position.x = earth_p;
        scene.add(earth);
    } );

                    //юпитер
                    var jupiter_geometry = new THREE.SphereGeometry(jupiter_r,20,20),
                        jupiter;

                    loader.load( 'images/jupiter.jpg', function ( texture ) {
                        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
                        jupiter = new THREE.Mesh( jupiter_geometry, material );
                        jupiter.castShadow = true;
                        jupiter.position.x = jupiter_p;
                        scene.add(jupiter);
                    } );

                    //марс
                    var mars_geometry = new THREE.SphereGeometry(mars_r,20,20),
                        mars;

                    loader.load( 'images/mars.jpg', function ( texture ) {
                        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
                        mars = new THREE.Mesh( mars_geometry, material );
                        mars.castShadow = true;
                        mars.position.x = mars_p;
                        scene.add(mars);
                    } );

                    //меркурий
                    var mercury_geometry = new THREE.SphereGeometry(mercury_r,20,20),
                        mercury;

                    loader.load( 'images/mercury.jpg', function ( texture ) {
                        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
                        mercury = new THREE.Mesh( mercury_geometry, material );
                        mercury.castShadow = true;
                        mercury.position.x = mercury_p;
                        scene.add(mercury);
                    } );

                    //венера
                    var venera_geometry = new THREE.SphereGeometry(venera_r,20,20),
                        venera;

                    loader.load( 'images/venera.jpg', function ( texture ) {
                        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
                        venera = new THREE.Mesh( venera_geometry, material );
                        venera.castShadow = true;
                        venera.position.x = venera_p;
                        scene.add(venera);
                    } );

                    //сатурн
                    var saturn_geometry = new THREE.SphereGeometry(saturn_r,20,20),
                        saturn;

                    loader.load( 'images/saturn.jpg', function ( texture ) {
                        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
                        saturn = new THREE.Mesh( saturn_geometry, material );
                        saturn.castShadow = true;
                        saturn.position.x = saturn_p;
                        scene.add(saturn);
                    } );

                    var ring_saturn_geometry = new THREE.Geometry(),
                        ring_saturn_matterial = new THREE.ParticleBasicMaterial({color:0x3a3a3a, opacity:0.3, size:1, sizeAttenuation:false});
                        for(var i=0;i<20000;i++){
                            var vertex = new THREE.Vector3();
                            vertex.x = Math.sin(Math.PI/180*i)*(((saturn_r*2)+100)-i/80);
                            vertex.y = Math.random()*20;
                            vertex.z = Math.cos(Math.PI/180*i)*(((saturn_r*2)+100)-i/80);
                            ring_saturn_geometry.vertices.push(vertex);
                        }

                    var ring = new THREE.ParticleSystem(ring_saturn_geometry, ring_saturn_matterial);
                    ring.rotation.x = 0.4;
                    ring.castShadow = true;
                    scene.add(ring);

                    //нептун
                    var neptun_geometry = new THREE.SphereGeometry(neptun_r,20,20),
                        neptun;

                    loader.load( 'images/neptun.jpg', function ( texture ) {
                        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
                        neptun = new THREE.Mesh( neptun_geometry, material );
                        neptun.castShadow = true;
                        neptun.position.x = neptun_p;
                        scene.add(neptun);
                    } );

                    //плутон
                    var pluton_geometry = new THREE.SphereGeometry(pluton_r,20,20),
                        pluton;

                    loader.load( 'images/pluton.jpg', function ( texture ) {
                        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
                        pluton = new THREE.Mesh( pluton_geometry, material );
                        pluton.castShadow = true;
                        pluton.position.x = pluton_p;
                        scene.add(pluton);
                    } );
                    //уран
                    var uran_geometry = new THREE.SphereGeometry(uran_r,20,20),
                        uran;

                    loader.load( 'images/uran.jpg', function ( texture ) {
                        var material = new THREE.MeshPhongMaterial( { map: texture, overdraw: 0.5, emissive:0x000000} );
                        uran = new THREE.Mesh( uran_geometry, material );
                        uran.castShadow = true;
                        uran.position.x = uran_p;
                        scene.add(uran);
                    } );


/**
 * конец введения далее работа с камерой
 * зададим коэффициент для вращения земли вокруг солнца
 * и в анимации применим закон синусов и косинусов
 * часть 2 работа с камерой и немного управления
 * переходим к функции анимате
 */
var k_rotate_jupiter = k_rotate_mars = k_rotate_mercury = k_rotate_venera =
    k_rotate_saturn = k_rotate_neptun = k_rotate_pluton = k_rotate_uran = k_rotate_earth = 0;


/**
 * часть 3 добавляем звезды
 */
var starsGeometry = new THREE.Geometry(),
    starsMaterial = new THREE.PointsMaterial({
        color:'#BBBBBB',
        opacity: 0.6,
        size:1,
        sizeAttenuation:false
    });
    for(var i=0;i<45000;i++){
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
        vertex.multiplyScalar(9300);
        starsGeometry.vertices.push(vertex);
    }
var stars = new THREE.Points(starsGeometry, starsMaterial);
stars.scale.set(40,40,40); //разброс
scene.add(stars);

/**
 * свет
 */

var light = new THREE.PointLight(0xffffff, 1.4, 100000);//цвет, интенсивностью, дистанция
light.castShadow = true;
light.shadowMapWidth = 1024;
light.shadowMapHeight = 1024;
scene.add(light);

/**
 * полет
 * добавить скрипт и добавить в функции анимейт
 */
var controls = new THREE.FlyControls(camera);
controls.movementSpeed = 3000;
controls.rollSpeed = Math.PI / 14;
controls.autoForward = false;
controls.dragToLook = false;


/**
 * кольца сатурна - найдем сатурн
 */


container.html(renderer.domElement);

function animate(){
    requestAnimationFrame(animate);
    //вращение солнца
    sun.rotation.y += 0.005;
    earth.rotation.y += 0.01;

    //вращение земли вокруг солца
    earth.position.x = Math.sin(k_rotate_earth*0.05)*1900;
    earth.position.z = Math.cos(k_rotate_earth*0.05)*1700;

    k_rotate_earth += Math.PI/180*3;

    //управление камерой
   // camera.lookAt(earth.position);
//    camera.position.x = earth.position.x + 300;
//    camera.position.z = earth.position.z + 200;
//    camera.lookAt(sun.position);
//    camera.position.x = earth.position.x;
//    camera.position.z = earth.position.z;


                                                        jupiter.rotation.y += 0.03;
                                                        jupiter.position.x = Math.sin(k_rotate_jupiter*0.03)*jupiter_p-200;
                                                        jupiter.position.z = Math.cos(k_rotate_jupiter*0.03)*jupiter_p+400;
                                                        k_rotate_jupiter += Math.PI/180*3;

                                                        mars.rotation.y += 0.04;
                                                        mars.position.x = Math.sin(k_rotate_mars*0.06)*mars_p+100;
                                                        mars.position.z = Math.cos(k_rotate_mars*0.06)*mars_p;
                                                        k_rotate_mars += Math.PI/180*3;

                                                        mercury.rotation.y += 0.002;
                                                        mercury.position.x = Math.sin(k_rotate_mercury*0.1)*mercury_p;
                                                        mercury.position.z = Math.cos(k_rotate_mercury*0.1)*mercury_p;
                                                        k_rotate_mercury += Math.PI/180*3;

                                                        venera.rotation.y += 0.01;
                                                        venera.position.x = Math.sin(k_rotate_venera*0.09)*venera_p+100;
                                                        venera.position.z = Math.cos(k_rotate_venera*0.09)*venera_p-100;
                                                        k_rotate_venera += Math.PI/180*3;

                                                        saturn.rotation.y += 0.05;
                                                        saturn.position.x = Math.sin(k_rotate_saturn*0.04)*saturn_p+500;
                                                        saturn.position.z = Math.cos(k_rotate_saturn*0.04)*saturn_p-100;
                                                        k_rotate_saturn += Math.PI/180*3;

                                                        neptun.rotation.y += 0.06;
                                                        neptun.position.x = Math.sin(k_rotate_neptun*0.009)*neptun_p;
                                                        neptun.position.z = Math.cos(k_rotate_neptun*0.009)*neptun_p;
                                                        k_rotate_neptun += Math.PI/180*3;

                                                        pluton.rotation.y += 0.05;
                                                        pluton.position.x = Math.sin(k_rotate_pluton*0.008)*pluton_p;
                                                        pluton.position.z = Math.cos(k_rotate_pluton*0.008)*pluton_p;
                                                        k_rotate_pluton += Math.PI/180*3;

                                                        uran.rotation.y += 0.07;
                                                        uran.position.x = Math.sin(k_rotate_uran*0.005)*uran_p;
                                                        uran.position.z = Math.cos(k_rotate_uran*0.005)*uran_p;
                                                        k_rotate_uran += Math.PI/180*3;

    controls.update(0.01);

    ring.position.x = saturn.position.x;
    ring.position.y = saturn.position.y;
    ring.position.z = saturn.position.z;
    ring.rotation.y += 0.07;

    renderer.render(scene, camera)
}

/**
 * проверка на возможность подключение WEBGL,
 * в случае неудачи возвращаем рендеринг канваса
 * @returns {*}
 */
function doOnLoad(){

    var myCanvas = document.getElementById("mycanvas");
    var glContextName = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    for(var i = 0; i < glContextName.length; ++i){
        try{
            webGl = myCanvas.getContext(glContextName[i]);
        }catch(e){
        }
        if(webGl){
            break;
        }
    }
    if(webGl != null){
        return(new THREE.WebGLRenderer());
    }else{
        return(new THREE.CanvasRenderer());
    }
}

animate();


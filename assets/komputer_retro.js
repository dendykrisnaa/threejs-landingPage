const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera( 50, width / height, 1, 1000 );
scene2.add( camera2 );

//atur posisi kamera
camera2.position.z = 5;

const renderer2 = new THREE.WebGLRenderer({ alpha: true }); //alpha true = background transparan

renderer2.setSize(width, height);
document.body.appendChild(renderer2.domElement);

//deklarasikan light
const lampu1_scene2 = new THREE.PointLight(0xffffff, 1);
lampu1_scene2.position.set(10,3,10);
scene2.add(lampu1_scene2);

const lampuAmbient_scene2 = new THREE.AmbientLight("#FFFFFF",0.5);
scene2.add(lampuAmbient_scene2);

//deklarasikan geometri
const silinderA = new THREE.CylinderGeometry(
0.25, //radius atau luas penampang atas
0.25, //radius atau luas penampang bawah
0.5, //tinggi
8 //radial segment
);

const oktahedron = new THREE.OctahedronGeometry(1, 1); //radius,detail

const kerucutA = new THREE.ConeGeometry(
1, //radius (luas)
2, //tinggi
4, //radialSegments
);

//deklarasikan material
const putih = new THREE.MeshLambertMaterial(
    {
        color: '#DDDDDD',
        emissive: '#F5F5F5',
        emissiveIntensity: 0.5,
    }
);

const hitamAspal = new THREE.MeshLambertMaterial(
    {
        color: '#0A0F13',
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);

//material abu-abu bisa untuk material ban juga
const abuAbu = new THREE.MeshLambertMaterial(
    {
        color: '#1B252E',
        emissive: '#485063',
        emissiveIntensity: 0.25,
    }
);

const kuningLampu =  new THREE.MeshLambertMaterial(
    {
        color: '#FFBA25',
        emissive: '#FFBA25',
        emissiveIntensity: 0.2,
    }
);

//deklarasikan mesh/objek

//monitor
const monitor = new THREE.Mesh(kotakA,putih);
scene2.add(monitor);

monitor.scale.x = 2.5;
monitor.scale.y = 2;

//layar lcd
const layarLCD = new THREE.Mesh(kotakA,hitamAspal);
scene2.add(layarLCD);

layarLCD.scale.x = 2.25;
layarLCD.scale.y = 1.8;

layarLCD.position.z = 0.15;

//kaki monitor
const kakiMonitor = new THREE.Mesh(silinderA,putih);
scene2.add(kakiMonitor);

kakiMonitor.position.y = -1.2;

//mecha keyboard
const mechanicalKeyboard = new THREE.Mesh(kotakA,putih);
scene2.add(mechanicalKeyboard);

mechanicalKeyboard.scale.x = 3;
mechanicalKeyboard.scale.y = 0.25;

mechanicalKeyboard.position.y = -1.45;
mechanicalKeyboard.position.z = 0.8;

//tombol keyboard
const tombol1 = new THREE.Mesh(kotakA,abuAbu);
scene2.add(tombol1);

tombol1.scale.x = 2.05;
tombol1.scale.y = 0.25;
tombol1.scale.z = 0.4;

tombol1.position.x = -0.3;
tombol1.position.y = -1.4;
tombol1.position.z = 0.75;

const tombol2 = new THREE.Mesh(kotakA,abuAbu);
scene2.add(tombol2);

tombol2.scale.x = 0.5;
tombol2.scale.y = 0.25;
tombol2.scale.z = 0.4;

tombol2.position.x = 1.15;
tombol2.position.y = -1.4;
tombol2.position.z = 0.75;

//lampu indikator keyboard (3 lampu)
const indikatorLight1 = new THREE.Mesh(kotakA,materialKotak_NoTransparent);
scene2.add(indikatorLight1);

indikatorLight1.scale.set(0.1,0.1,0.1);

indikatorLight1.position.x = 1.05;
indikatorLight1.position.y = -1.45;
indikatorLight1.position.z = 1.26;

const indikatorLight2 = new THREE.Mesh(kotakA,materialKotak_NoTransparent);
scene2.add(indikatorLight2);

indikatorLight2.scale.set(0.1,0.1,0.1);

indikatorLight2.position.x = 1.2;
indikatorLight2.position.y = -1.45;
indikatorLight2.position.z = 1.26;

const indikatorLight3 = new THREE.Mesh(kotakA,kuningLampu);
scene2.add(indikatorLight3);

indikatorLight3.scale.set(0.1,0.1,0.1);

indikatorLight3.position.x = 1.35;
indikatorLight3.position.y = -1.45;
indikatorLight3.position.z = 1.26;

//objek 3D Wireframe
const silinder3D = new THREE.Mesh(silinderA,materialSarang);
scene2.add(silinder3D);

silinder3D.scale.x = 0.6;
silinder3D.scale.y = 0.8;
silinder3D.scale.z = 0.6;

silinder3D.position.x = -0.5;
silinder3D.position.y = 0.35;
silinder3D.position.z = 1.5;

const kotak3D = new THREE.Mesh(kotakA,materialKotak);
scene2.add(kotak3D);

kotak3D.scale.x = 0.3;
kotak3D.scale.y = 0.3;
kotak3D.scale.z = 0.3;

kotak3D.position.x = -0.5;
kotak3D.position.y = -0.25;
kotak3D.position.z = 1.5;

const kristal3D = new THREE.Mesh(oktahedron,materialSarang);
scene2.add(kristal3D);

kristal3D.scale.x = 0.2;
kristal3D.scale.y = 0.2;
kristal3D.scale.z = 0.2;

kristal3D.position.x = 0.5;
kristal3D.position.y = -0.25;
kristal3D.position.z = 1.5;

const piramid3D = new THREE.Mesh(kerucutA,materialKotak);
scene2.add(piramid3D);

piramid3D.scale.x = 0.2;
piramid3D.scale.y = 0.2;
piramid3D.scale.z = 0.2;

piramid3D.position.x = 0.5;
piramid3D.position.y = 0.35;
piramid3D.position.z = 1.5;

window.addEventListener('resize', function() {
    renderer2.setSize(width, height);
    camera2.aspect = width / height;
    camera2.updateProjectionMatrix();
});

function update2() {
    //animasi objek 3D Wireframe
    silinder3D.rotation.y -= 0.01;

    kotak3D.rotation.x -= 0.01;
    kotak3D.rotation.y += 0.01;

    kristal3D.rotation.x += 0.01;
    kristal3D.rotation.y -= 0.01;

    piramid3D.rotation.y += 0.01;

    requestAnimationFrame(update2);
    renderer2.render(scene2, camera2);
}

update2();
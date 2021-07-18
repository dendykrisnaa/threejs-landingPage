const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera( 50, width / height, 1, 1000 );
scene3.add( camera3 );

//atur posisi kamera
camera3.position.z = 5;

const renderer3 = new THREE.WebGLRenderer({ alpha: true }); //alpha true = background transparan

renderer3.setSize(width, height);
document.body.appendChild(renderer3.domElement);

//deklarasikan light
const lampu1_scene3 = new THREE.PointLight(0xffffff, 1);
lampu1_scene3.position.set(-2,-10,10);
scene3.add(lampu1_scene3);

const lampu2_scene3 = new THREE.PointLight(0xffffff, 1);
lampu2_scene3.position.set(10,3,10);
scene3.add(lampu2_scene3);

const lampu3_scene3 = new THREE.PointLight(0xffffff, 1);
lampu3_scene3.position.set(2,1,-10);
scene3.add(lampu3_scene3);

//deklarasikan geometri
const torusA = new THREE.TorusGeometry( 1, 0.5, 16, 100 );
//angka pertama: radius/luas donat, angka kedua: tube/luas dari lubangnya, angka ketiga: radial segmen, angka keempat: tubular segmen
//radial dan tubular segmen dapat digunakan untuk menambah rusuk dan jari jari donat sehingga lebih detail/halus.

const torusB = new THREE.TorusGeometry( 0.5, 0.25, 16, 100 );

//deklarasikan material
const waffleTexture =
new THREE.TextureLoader().load('https://i.postimg.cc/j2nhpbDH/seamless-realistic-wafer-pattern-88188-107-2.jpg');

const coklat = new THREE.MeshPhongMaterial(
    {
        color: '#362312',
        shininess: 100,
        bumpMap: waffleTexture,
        bumpScale: 0.05,
    }
);

const strawberry = new THREE.MeshPhongMaterial(
    {
        color: '#F57F8E',
        shininess: 100,
        bumpMap: waffleTexture,
        bumpScale: 0.05,
    }
);

const matchaTea = new THREE.MeshPhongMaterial(
    {
        color: '#A7DB42',
        shininess: 100,
        bumpMap: waffleTexture,
        bumpScale: 0.05,
    }
);

const vanilla = new THREE.MeshPhongMaterial(
    {
        color: '#D6C5AF',
        shininess: 100,
        bumpMap: waffleTexture,
        bumpScale: 0.05,
    }
);

const darkChocolate = new THREE.MeshPhongMaterial(
    {
        //color: '#231709',
        color: '#181006',
        shininess: 100,
        bumpMap: waffleTexture,
        bumpScale: 0.05,
    }
);

//deklarasikan mesh/objek
const donatBesar = new THREE.Mesh(torusA,coklat);
scene3.add(donatBesar);

const donatKecil1 = new THREE.Mesh(torusB,strawberry);
scene3.add(donatKecil1);

donatKecil1.position.x = 3;
donatKecil1.position.y = 1;

const donatKecil2 = new THREE.Mesh(torusB,matchaTea);
scene3.add(donatKecil2);

donatKecil2.position.x = 3;
donatKecil2.position.y = -1;

const donatKecil3 = new THREE.Mesh(torusB,vanilla);
scene3.add(donatKecil3);

donatKecil3.position.x = -3;
donatKecil3.position.y = 1;

const donatKecil4 = new THREE.Mesh(torusB,darkChocolate);
scene3.add(donatKecil4);

donatKecil4.position.x = -3;
donatKecil4.position.y = -1;

window.addEventListener('resize', function() {
    renderer3.setSize(width, height);
    camera3.aspect = width / height;
    camera3.updateProjectionMatrix();
});

function update3() {
    //animasi donat
    donatBesar.rotation.y += 0.01; //animasi rotasi sumbu y
    donatBesar.rotation.x += 0.01; //animasi rotasi sumbu x
    
    donatKecil1.rotation.x += 0.01; //animasi rotasi sumbu x
    
    donatKecil2.rotation.y += 0.01; //animasi rotasi sumbu y
    
    donatKecil3.rotation.y += 0.01; //animasi rotasi sumbu y
    
    donatKecil4.rotation.x += 0.01; //animasi rotasi sumbu x

    requestAnimationFrame(update3);
    renderer3.render(scene3, camera3);
}

update3();
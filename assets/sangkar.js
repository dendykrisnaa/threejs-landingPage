let width = window.innerWidth;
let height = window.innerHeight;

const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
scene1.add( camera1 );

//atur posisi kamera
camera1.position.z = 5;

const renderer1 = new THREE.WebGLRenderer({ alpha: true }); //alpha true = background transparan

renderer1.setSize(width, height);
document.body.appendChild(renderer1.domElement);

//deklarasikan light
const lampu1_scene1 = new THREE.PointLight(0xffffff, 1);
lampu1_scene1.position.set(-2,-10,10);
scene1.add(lampu1_scene1);

const lampu2_scene1 = new THREE.PointLight(0xffffff, 1);
lampu2_scene1.position.set(10,3,10);
scene1.add(lampu2_scene1);

const lampu3_scene1 = new THREE.PointLight(0xffffff, 1);
lampu3_scene1.position.set(2,1,-10);
scene1.add(lampu3_scene1);

//deklarasikan geometri

//kotakA untuk sarang (sangkar)
const kotakWidthSegments =  4;  //jumlah wireframe di sumbu x
const kotakHeightSegments =  4; //jumlah wireframe di sumbu y
const kotakDepthSegments =  4;  //jumlah wireframe di sumbu z

const kotakA = new THREE.BoxGeometry(
  1, //lebar
  1, //tinggi
  1, //panjang (kedalaman)
  kotakWidthSegments,
  kotakHeightSegments,
  kotakDepthSegments
);

//deklarasikan material
const materialSarang = new THREE.MeshLambertMaterial(
    {
        color: '#17A589',
        emissive: '#17A589',
        emissiveIntensity: 0.2,
        wireframe:true, //objek hanya akan ditampilkan wireframe/kerangkanya saja
    }
);

const materialKotak =  new THREE.MeshLambertMaterial(
    {
        color: '#40E287',
        emissive: '#40E287',
        emissiveIntensity: 0.2,
        transparent: true, //jika true, maka kita bisa menampilkan objek tembus pandang, dengan cara mengubah nilai opacity
        opacity: 0.8, //nilai 1 = nggak tembus pandang. kurang dari 1 = makin tembus pandang. 0 = nggak kelihatan
    }
);

const materialKotak_NoTransparent =  new THREE.MeshLambertMaterial(
    {
        color: '#40E287',
        emissive: '#40E287',
        emissiveIntensity: 0.2
    }
);

//deklarasikan mesh/objek
const sarangBesar = new THREE.Mesh(kotakA,materialSarang);
scene1.add(sarangBesar);

//atur ukuran sarang dari sumbu x, y, dan z
sarangBesar.scale.set(2,2,2);

const kotakBesar = new THREE.Mesh(kotakA,materialKotak);
scene1.add(kotakBesar);

//atur ukuran kotak dari sumbu x, y, dan z
kotakBesar.scale.set(0.8,0.8,0.8);

const sarangKecil1 = new THREE.Mesh(kotakA,materialSarang);
scene1.add(sarangKecil1);

//atur posisi sarang dari sumbu x, y, dan z
sarangKecil1.position.set(3,1,0);

const kotakKecil1 = new THREE.Mesh(kotakA,materialKotak);
scene1.add(kotakKecil1);

//atur ukuran kotak dari sumbu x, y, dan z
kotakKecil1.scale.set(0.4,0.4,0.4);

//atur posisi kotak dari sumbu x, y, dan z
kotakKecil1.position.set(3,1,0);

const sarangKecil2 = new THREE.Mesh(kotakA,materialSarang);
scene1.add(sarangKecil2);

//atur posisi sarang dari sumbu x, y, dan z
sarangKecil2.position.set(-3,-1,0);

const kotakKecil2 = new THREE.Mesh(kotakA,materialKotak);
scene1.add(kotakKecil2);

//atur ukuran kotak dari sumbu x, y, dan z
kotakKecil2.scale.set(0.4,0.4,0.4);

//atur posisi kotak dari sumbu x, y, dan z
kotakKecil2.position.set(-3,-1,0);

window.addEventListener('resize', function() {
    renderer1.setSize(width, height);
    camera1.aspect = width / height;
    camera1.updateProjectionMatrix();
});

function update1() {
    //animasi sangkar
    sarangBesar.rotation.x += 0.01;
    sarangBesar.rotation.y += 0.01;

    sarangKecil1.rotation.x -= 0.01;
    sarangKecil1.rotation.y -= 0.01;

    sarangKecil2.rotation.x += 0.01;
    sarangKecil2.rotation.y += 0.01;

    //animasi kotak
    kotakBesar.rotation.x += 0.01;
    kotakBesar.rotation.y += 0.01;

    kotakKecil1.rotation.x -= 0.01;
    kotakKecil1.rotation.y -= 0.01;

    kotakKecil2.rotation.x += 0.01;
    kotakKecil2.rotation.y += 0.01;

    requestAnimationFrame(update1);
    renderer1.render(scene1, camera1);
}

update1();

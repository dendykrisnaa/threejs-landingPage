const scene6 = new THREE.Scene();
const camera6 = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
scene6.add( camera6 );

//atur posisi kamera
camera6.position.y = 3;
camera6.position.z = 3;

const renderer6 = new THREE.WebGLRenderer({ alpha: true }); //alpha true = background transparan

renderer6.setSize(width, height);
document.body.appendChild(renderer6.domElement);

//orbit controls
controlsC = new THREE.OrbitControls(camera6, renderer6.domElement);

//deklarasikan light
const lampu1_scene6 = new THREE.PointLight(0xffffff, 1);
lampu1_scene6.position.set(-2,-10,10);
scene6.add(lampu1_scene6);

const lampu2_scene6 = new THREE.PointLight(0xffffff, 1);
lampu2_scene6.position.set(10,3,10);
scene6.add(lampu2_scene6);

const lampu3_scene6 = new THREE.PointLight(0xffffff, 1);
lampu3_scene6.position.set(2,1,-10);
scene6.add(lampu3_scene6);

const lampu4_scene6 = new THREE.AmbientLight("#FFFFFF",0.5);
scene6.add(lampu4_scene6);

//deklarasikan geometri
const openEnded = true; //(jika openEnded true, maka ujung silinder terbuka/berlubang)

const silinderE = new THREE.CylinderGeometry( 0.8, 0.6, 1.5, 30 );

const silinderF = new THREE.CylinderGeometry( 0.9, 0.9, 0.1, 30 );

const silinderG = new THREE.CylinderGeometry(
0.1, //radiusTop (luas penampang atas),
0.1, //radiusBottom (luas penampang bawah),
1.4, //height (tinggi),
30, //radialSegments,
1, //heightSegments,
openEnded
);

//deklarasikan material
const cupMaterial = new THREE.MeshPhongMaterial(
{
    color: '#C6AB80',
    shininess: 100,
}
);

const labelBoba = new THREE.TextureLoader().load('https://i.postimg.cc/BbGvF7wc/de-bonang-dark.png');
const labelMaterial = new THREE.MeshPhongMaterial(
{
    color: '#F5F5DC',
    shininess: 100,
    map: labelBoba,
}
);

const sedotanMaterial = new THREE.MeshPhongMaterial(
{
    color: '#363636',
    shininess: 100,
    side: THREE.DoubleSide
    /* secara bawaan, material threeJS hanya tampak bagian depan atau luarnya saja 
    sedangkan bagian dalam atau bagian belakang dari objeknya tidak terlihat/transparan, 
    jika ditambahkan side: THREE.DoubleSide, maka material akan tampak luar-dalam atau depan-belakang. */
}
);

//deklarasikan mesh/objek
let cupBoba = new THREE.Mesh(silinderE, cupMaterial);
scene6.add(cupBoba);

let tutupCup = new THREE.Mesh(silinderF, labelMaterial);
scene6.add(tutupCup);

tutupCup.position.y = 0.8; //atur posisi sumbu y

let sedotanCup = new THREE.Mesh(silinderG, sedotanMaterial);
scene6.add(sedotanCup);

sedotanCup.position.x = 0.35; //atur posisi sumbu x
sedotanCup.position.y = 0.8; //atur posisi sumbu y

//gridHelper untuk menampilkan lantai grid ala aplikasi 3D
/*
const gridHelper2 = new THREE.GridHelper( gridSize, gridDivisions );
scene6.add( gridHelper2 );

gridHelper2.position.y = -0.8;
*/

window.addEventListener('resize', function() {
renderer6.setSize(width, height);
camera6.aspect = width / height;
camera6.updateProjectionMatrix();
});

function update6() {
requestAnimationFrame(update6);
renderer6.render(scene6, camera6);
}

update6();

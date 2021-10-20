const scene4 = new THREE.Scene();
const camera4 = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
scene4.add(camera4);

camera4.position.x = 3;
camera4.position.y = 2;
camera4.position.z = 3;

const renderer4 = new THREE.WebGLRenderer({ alpha: true }); //alpha true = background transparan

renderer4.setSize(width, height);
document.body.appendChild(renderer4.domElement);

//mengambil paragraf yang ber-id loadingProgress
const checkProgress = document.getElementById("loadingProgress");

//orbit controls
/* awalnya sempat mencoba tidak menggunakan orbit controls, namun entah kenapa setelah dibuka lagi view tampilan kameranya
nge-glitch. Dan setelah diberi orbit controls view kameranya menjadi normal kembali.
Kemungkinan glitch-nya berasal dari function update. Namun saya belum bisa menemukan penyebab pasti dari glitch ini. */
controlsA = new THREE.OrbitControls(camera4, renderer4.domElement);

//deklarasikan light
const lampu1_scene4 = new THREE.DirectionalLight("#FFFFFF",1);
scene4.add(lampu1_scene4);
lampu1_scene4.position.y = 2;

const lampu2_scene4 = new THREE.AmbientLight("#FFFFFF",0.5);
scene4.add(lampu2_scene4);

//import dari dorayaki.gltf
const loader = new THREE.GLTFLoader();

loader.load('.//assets/dorayaki.gltf', function (gltf) {
        const makanan = gltf.scene;
        scene4.add(makanan);

        /* menganimasikan dorayaki, dikarenakan "makanan" tidak bisa dipanggil diluar fungsi, maka untuk animasi dorayaki tidak
        ditempatkan pada function update */
        function animation() {
            makanan.rotation.y += 0.005;
            requestAnimationFrame(animation);
        }

        animation();
    },

    //menampilkan progress load objek
    function onProgress( xhr ) {
                const loadStatus = xhr.loaded / xhr.total;
                
                //menampilkan progress load 3d model pada console
                console.log('Loaded: ' + Math.round( loadStatus * 100 ) + '%');

                //menampilkan progress load 3d model pada html
                checkProgress.innerHTML = "Loading 3D Model: " + Math.round( loadStatus * 100) + "%, tunggu hingga sepiring sushi dan dorayaki siap disajikan";
                checkProgress.style.fontWeight = "bold"; //menampilkan tulisan tebal
    },

    function onError() {}
);

//gridHelper untuk menampilkan lantai grid ala aplikasi 3D
const gridSize = 50;
const gridDivisions = 50;

const gridHelper1 = new THREE.GridHelper( gridSize, gridDivisions );
scene4.add( gridHelper1 );

gridHelper1.position.y = -0.3;

window.addEventListener('resize', function() {
    renderer4.setSize(width, height);
    camera4.aspect = width / height;
    camera4.updateProjectionMatrix();
});

function update4() {
    requestAnimationFrame(update4);
    renderer4.render(scene4, camera4);
}

update4();

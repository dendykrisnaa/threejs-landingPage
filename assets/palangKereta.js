const scene5 = new THREE.Scene();
const camera5 = new THREE.PerspectiveCamera( 25, width / height, 1, 1000 );
scene5.add( camera5 );

//atur posisi kamera
camera5.position.x = 5;
camera5.position.y = 3.5;
camera5.position.z = 5;

const renderer5 = new THREE.WebGLRenderer({ alpha: true, antialiasing: true }); //alpha true = background transparan

renderer5.setSize(width, height);
document.body.appendChild(renderer5.domElement);

//orbit controls
controlsB = new THREE.OrbitControls(camera5, renderer5.domElement);

//deklarasikan light
const lampu1_scene5 = new THREE.PointLight(0xffffff, 1);
lampu1_scene5.position.set(-2,-10,10);
scene5.add(lampu1_scene5);

const lampu2_scene5 = new THREE.PointLight(0xffffff, 1);
lampu2_scene5.position.set(10,3,10);
scene5.add(lampu2_scene5);

const lampu3_scene5 = new THREE.PointLight(0xffffff, 1);
lampu3_scene5.position.set(2,1,-10);
scene5.add(lampu3_scene5);

//deklarasikan geometri
const silinderB = new THREE.CylinderGeometry( 0.07, 0.07, 0.2, 8 );

const silinderC = new THREE.CylinderGeometry( 0.08, 0.3, 0.2, 8 );

const silinderD = new THREE.CylinderGeometry( 0.03, 0.2, 0.2, 8 );

//deklarasikan material
const kayuTexture = new THREE.TextureLoader().load('https://i.postimg.cc/8CrMkHpG/relief-texture-brown-bark-tree-close-up-158595-6482.jpg');

const coklatPohon = new THREE.MeshLambertMaterial(
{
        color: '#3F301D',
        map: kayuTexture,
        emissive: '#4A3728',
        emissiveIntensity: 0.5,
    }
);

const rumputTexture = new THREE.TextureLoader().load('https://i.postimg.cc/6pWMQFgX/dirt-ground-texture-tileable-2048x2048-by-fabooguy-d7aopi7-pre.jpg');

const hijauDaun = new THREE.MeshLambertMaterial(
{
        color: '#228C22',
        map: rumputTexture,
        emissive: '#A7DB42',
        emissiveIntensity: 0.6,
    }
);

const hijauRumput = new THREE.MeshLambertMaterial(
{
        color: '#1A9A5C',
        map: rumputTexture,
        emissive: '#4A934A',
        emissiveIntensity: 0.5,
    }
);

const merah = new THREE.MeshLambertMaterial(
{
        color: '#9A0E2A',
        emissive: '#DC143C',
        emissiveIntensity: 0.5,
    }
);

const palangTexture = new THREE.TextureLoader().load('.//assets/red-line.jpg');

const palangMaterial = new THREE.MeshLambertMaterial(
{
        map: palangTexture,
    }
);

//deklarasikan mesh/objek

/* Lahan */
const lahan = new THREE.Mesh(kotakA,hijauRumput);
scene5.add(lahan);

lahan.scale.x = 3;
lahan.scale.y = 0.3;
lahan.scale.z = 3;

/* Aspal */
const jalananBeraspal = new THREE.Mesh(kotakA,hitamAspal);
scene5.add(jalananBeraspal);

jalananBeraspal.scale.x = 3.1;
jalananBeraspal.scale.y = 0.13;
jalananBeraspal.scale.z = 0.8;

jalananBeraspal.position.y = 0.1;

/* Pohon 1 */
const batangPohon1 = new THREE.Mesh(silinderB,coklatPohon);
scene5.add(batangPohon1);

batangPohon1.position.x = -1;
batangPohon1.position.y = 0.2;
batangPohon1.position.z = -1;

const daun1_pohon1 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun1_pohon1);

daun1_pohon1.position.x = -1;
daun1_pohon1.position.y = 0.4;
daun1_pohon1.position.z = -1;

const daun2_pohon1 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun2_pohon1);

daun2_pohon1.position.x = -1;
daun2_pohon1.position.y = 0.5;
daun2_pohon1.position.z = -1;

const daun3_pohon1 = new THREE.Mesh(silinderD,hijauDaun);
scene5.add(daun3_pohon1);

daun3_pohon1.position.x = -1;
daun3_pohon1.position.y = 0.7;
daun3_pohon1.position.z = -1;

/* Pohon 2 */
const batangPohon2 = new THREE.Mesh(silinderB,coklatPohon);
scene5.add(batangPohon2);

batangPohon2.position.x = -0.3;
batangPohon2.position.y = 0.2;
batangPohon2.position.z = -1;

const daun1_pohon2 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun1_pohon2);

daun1_pohon2.position.x = -0.3;
daun1_pohon2.position.y = 0.4;
daun1_pohon2.position.z = -1;

const daun2_pohon2 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun2_pohon2);

daun2_pohon2.position.x = -0.3;
daun2_pohon2.position.y = 0.5;
daun2_pohon2.position.z = -1;

const daun3_pohon2 = new THREE.Mesh(silinderD,hijauDaun);
scene5.add(daun3_pohon2);

daun3_pohon2.position.x = -0.3;
daun3_pohon2.position.y = 0.7;
daun3_pohon2.position.z = -1;

/* Pohon 3 */
const batangPohon3 = new THREE.Mesh(silinderB,coklatPohon);
scene5.add(batangPohon3);

batangPohon3.position.x = -0.3;
batangPohon3.position.y = 0.2;
batangPohon3.position.z = 1;

const daun1_pohon3 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun1_pohon3);

daun1_pohon3.position.x = -0.3;
daun1_pohon3.position.y = 0.4;
daun1_pohon3.position.z = 1;

const daun2_pohon3 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun2_pohon3);

daun2_pohon3.position.x = -0.3;
daun2_pohon3.position.y = 0.5;
daun2_pohon3.position.z = 1;

const daun3_pohon3 = new THREE.Mesh(silinderD,hijauDaun);
scene5.add(daun3_pohon3);

daun3_pohon3.position.x = -0.3;
daun3_pohon3.position.y = 0.7;
daun3_pohon3.position.z = 1;

/* Pohon 4 */
const batangPohon4 = new THREE.Mesh(silinderB,coklatPohon);
scene5.add(batangPohon4);

batangPohon4.position.x = -1;
batangPohon4.position.y = 0.2;
batangPohon4.position.z = 1;

const daun1_pohon4 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun1_pohon4);

daun1_pohon4.position.x = -1;
daun1_pohon4.position.y = 0.4;
daun1_pohon4.position.z = 1;

const daun2_pohon4 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun2_pohon4);

daun2_pohon4.position.x = -1;
daun2_pohon4.position.y = 0.5;
daun2_pohon4.position.z = 1;

const daun3_pohon4 = new THREE.Mesh(silinderD,hijauDaun);
scene5.add(daun3_pohon4);

daun3_pohon4.position.x = -1;
daun3_pohon4.position.y = 0.7;
daun3_pohon4.position.z = 1;

/* Pohon 5 */
const batangPohon5 = new THREE.Mesh(silinderB,coklatPohon);
scene5.add(batangPohon5);

batangPohon5.position.x = 0.4;
batangPohon5.position.y = 0.2;
batangPohon5.position.z = -1;

const daun1_pohon5 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun1_pohon5);

daun1_pohon5.position.x = 0.4;
daun1_pohon5.position.y = 0.4;
daun1_pohon5.position.z = -1;

const daun2_pohon5 = new THREE.Mesh(silinderC,hijauDaun);
scene5.add(daun2_pohon5);

daun2_pohon5.position.x = 0.4;
daun2_pohon5.position.y = 0.5;
daun2_pohon5.position.z = -1;

const daun3_pohon5 = new THREE.Mesh(silinderD,hijauDaun);
scene5.add(daun3_pohon5);

daun3_pohon5.position.x = 0.4;
daun3_pohon5.position.y = 0.7;
daun3_pohon5.position.z = -1;

//untuk truk dan mobil saya buat beroda tiga seperti bemo atau bajai

/* Truk */
const mukaTruk = new THREE.Mesh(kotakA,merah);
scene5.add(mukaTruk);

mukaTruk.scale.x = 0.2;
mukaTruk.scale.y = 0.1;
mukaTruk.scale.z = 0.25;

mukaTruk.position.x = 0.05;
mukaTruk.position.y = 0.25;

const kacaTruk = new THREE.Mesh(kotakA,hitamAspal);
scene5.add(kacaTruk);

kacaTruk.scale.x = 0.15;
kacaTruk.scale.y = 0.15;
kacaTruk.scale.z = 0.2;

kacaTruk.position.x = 0.02;
kacaTruk.position.y = 0.35;

const atapTruk = new THREE.Mesh(kotakA,merah);
scene5.add(atapTruk);

atapTruk.scale.x = 0.15;
atapTruk.scale.y = 0.02;
atapTruk.scale.z = 0.2;

atapTruk.position.x = 0.02;
atapTruk.position.y = 0.435;

const kontainerTruk = new THREE.Mesh(kotakA,putih);
scene5.add(kontainerTruk);

kontainerTruk.scale.x = 0.4;
kontainerTruk.scale.y = 0.3;
kontainerTruk.scale.z = 0.25;

kontainerTruk.position.x = -0.25;
kontainerTruk.position.y = 0.35;

const banTruk1 = new THREE.Mesh(kotakA,abuAbu);
scene5.add(banTruk1);

banTruk1.scale.x = 0.08;
banTruk1.scale.y = 0.08;
banTruk1.scale.z = 0.05;

banTruk1.position.x = 0.15;
banTruk1.position.y = 0.2;

const banTruk2 = new THREE.Mesh(kotakA,abuAbu);
scene5.add(banTruk2);

banTruk2.scale.x = 0.08;
banTruk2.scale.y = 0.08;
banTruk2.scale.z = 0.05;

banTruk2.position.x = -0.35;
banTruk2.position.y = 0.2;
banTruk2.position.z = 0.13;

const banTruk3 = new THREE.Mesh(kotakA,abuAbu);
scene5.add(banTruk3);

banTruk3.scale.x = 0.08;
banTruk3.scale.y = 0.08;
banTruk3.scale.z = 0.05;

banTruk3.position.x = -0.35;
banTruk3.position.y = 0.2;
banTruk3.position.z = -0.13;

/* Mobil */
const bodyMobil = new THREE.Mesh(kotakA,merah);
scene5.add(bodyMobil);

bodyMobil.scale.x = 0.4;
bodyMobil.scale.y = 0.1;
bodyMobil.scale.z = 0.25;

bodyMobil.position.x = -0.9;
bodyMobil.position.y = 0.25;

const kacaMobil = new THREE.Mesh(kotakA,hitamAspal);
scene5.add(kacaMobil);

kacaMobil.scale.x = 0.2;
kacaMobil.scale.y = 0.15;
kacaMobil.scale.z = 0.2;

kacaMobil.position.x = -0.9;
kacaMobil.position.y = 0.35;

const atapMobil = new THREE.Mesh(kotakA,merah);
scene5.add(atapMobil);

atapMobil.scale.x = 0.2;
atapMobil.scale.y = 0.02;
atapMobil.scale.z = 0.2;

atapMobil.position.x = -0.9;
atapMobil.position.y = 0.435;

const banMobil1 = new THREE.Mesh(kotakA,abuAbu);
scene5.add(banMobil1);

banMobil1.scale.x = 0.08;
banMobil1.scale.y = 0.08;
banMobil1.scale.z = 0.05;

banMobil1.position.x = -0.71;
banMobil1.position.y = 0.2;

const banMobil2 = new THREE.Mesh(kotakA,abuAbu);
scene5.add(banMobil2);

banMobil2.scale.x = 0.08;
banMobil2.scale.y = 0.08;
banMobil2.scale.z = 0.05;

banMobil2.position.x = -1;
banMobil2.position.y = 0.2;
banMobil2.position.z = 0.13;

const banMobil3 = new THREE.Mesh(kotakA,abuAbu);
scene5.add(banMobil3);

banMobil3.scale.x = 0.08;
banMobil3.scale.y = 0.08;
banMobil3.scale.z = 0.05;

banMobil3.position.x = -1;
banMobil3.position.y = 0.2;
banMobil3.position.z = -0.13;


/* Palang Kereta */
const tiangPalang = new THREE.Mesh(silinderB,abuAbu);
scene5.add(tiangPalang);

tiangPalang.scale.y = 1.25;

tiangPalang.position.x = 0.5;
tiangPalang.position.y = 0.25;
tiangPalang.position.z = -0.5;

const tiangPalang2 = new THREE.Mesh(silinderB,abuAbu);
scene5.add(tiangPalang2);

tiangPalang2.scale.x = 0.5;
tiangPalang2.scale.y = 3;
tiangPalang2.scale.z = 0.5;

tiangPalang2.position.x = 0.68;
tiangPalang2.position.y = 0.45;
tiangPalang2.position.z = -0.5;

const pintuPalang = new THREE.Mesh(kotakA,palangMaterial);
scene5.add(pintuPalang);

pintuPalang.scale.x = 0.04;
pintuPalang.scale.y = 0.05;

pintuPalang.position.x = 0.5;
pintuPalang.position.y = 0.36;

const rambuPalang1 = new THREE.Mesh(kotakA,kuningLampu);
scene5.add(rambuPalang1);

rambuPalang1.scale.x = 0.025;
rambuPalang1.scale.y = 0.04;
rambuPalang1.scale.z = 0.4;

rambuPalang1.position.x = 0.65;
rambuPalang1.position.y = 0.7;
rambuPalang1.position.z = -0.5;

rambuPalang1.rotation.x = 10; //rotasi 10 derajat dengan poros sumbu x

const rambuPalang2 = new THREE.Mesh(kotakA,kuningLampu);
scene5.add(rambuPalang2);

rambuPalang2.scale.x = 0.025;
rambuPalang2.scale.y = 0.04;
rambuPalang2.scale.z = 0.4;

rambuPalang2.position.x = 0.65;
rambuPalang2.position.y = 0.7;
rambuPalang2.position.z = -0.5;

rambuPalang2.rotation.x = 40; //rotasi 40 derajat dengan poros sumbu x

/* Rel Kereta */
const jalurRel1 = new THREE.Mesh(kotakA,abuAbu);
scene5.add(jalurRel1);

jalurRel1.scale.x = 0.05;
jalurRel1.scale.y = 0.05;
jalurRel1.scale.z = 3.01;

jalurRel1.position.x = 1;
jalurRel1.position.y = 0.2;

const jalurRel2 = new THREE.Mesh(kotakA,abuAbu);
scene5.add(jalurRel2);

jalurRel2.scale.x = 0.05;
jalurRel2.scale.y = 0.05;
jalurRel2.scale.z = 3.01;

jalurRel2.position.x = 1.25;
jalurRel2.position.y = 0.2;

const bantalanRel1 = new THREE.Mesh(kotakA,coklatPohon);
scene5.add(bantalanRel1);

bantalanRel1.scale.x = 0.4;
bantalanRel1.scale.y = 0.05;
bantalanRel1.scale.z = 0.1;

bantalanRel1.position.x = 1.12;
bantalanRel1.position.y = 0.15;
bantalanRel1.position.z = -1.25;

const bantalanRel2 = new THREE.Mesh(kotakA,coklatPohon);
scene5.add(bantalanRel2);

bantalanRel2.scale.x = 0.4;
bantalanRel2.scale.y = 0.05;
bantalanRel2.scale.z = 0.1;

bantalanRel2.position.x = 1.12;
bantalanRel2.position.y = 0.15;
bantalanRel2.position.z = -1;

const bantalanRel3 = new THREE.Mesh(kotakA,coklatPohon);
scene5.add(bantalanRel3);

bantalanRel3.scale.x = 0.4;
bantalanRel3.scale.y = 0.05;
bantalanRel3.scale.z = 0.1;

bantalanRel3.position.x = 1.12;
bantalanRel3.position.y = 0.15;
bantalanRel3.position.z = -0.75;

const bantalanRel4 = new THREE.Mesh(kotakA,coklatPohon);
scene5.add(bantalanRel4);

bantalanRel4.scale.x = 0.4;
bantalanRel4.scale.y = 0.05;
bantalanRel4.scale.z = 0.1;

bantalanRel4.position.x = 1.12;
bantalanRel4.position.y = 0.15;
bantalanRel4.position.z = -0.5;

const bantalanRel5 = new THREE.Mesh(kotakA,coklatPohon);
scene5.add(bantalanRel5);

bantalanRel5.scale.x = 0.4;
bantalanRel5.scale.y = 0.05;
bantalanRel5.scale.z = 0.1;

bantalanRel5.position.x = 1.12;
bantalanRel5.position.y = 0.15;
bantalanRel5.position.z = 1.25;

const bantalanRel6 = new THREE.Mesh(kotakA,coklatPohon);
scene5.add(bantalanRel6);

bantalanRel6.scale.x = 0.4;
bantalanRel6.scale.y = 0.05;
bantalanRel6.scale.z = 0.1;

bantalanRel6.position.x = 1.12;
bantalanRel6.position.y = 0.15;
bantalanRel6.position.z = 1;

const bantalanRel7 = new THREE.Mesh(kotakA,coklatPohon);
scene5.add(bantalanRel7);

bantalanRel7.scale.x = 0.4;
bantalanRel7.scale.y = 0.05;
bantalanRel7.scale.z = 0.1;

bantalanRel7.position.x = 1.12;
bantalanRel7.position.y = 0.15;
bantalanRel7.position.z = 0.75;

const bantalanRel8 = new THREE.Mesh(kotakA,coklatPohon);
scene5.add(bantalanRel8);

bantalanRel8.scale.x = 0.4;
bantalanRel8.scale.y = 0.05;
bantalanRel8.scale.z = 0.1;

bantalanRel8.position.x = 1.12;
bantalanRel8.position.y = 0.15;
bantalanRel8.position.z = 0.5;

/* Lokomotif Kereta Api */
const bodyLokomotif = new THREE.Mesh(kotakA,merah);
scene5.add(bodyLokomotif);

bodyLokomotif.scale.x = 0.25;
bodyLokomotif.scale.y = 0.1;
bodyLokomotif.scale.z = 0.45;

bodyLokomotif.position.x = 1.12;
bodyLokomotif.position.y = 0.3;
bodyLokomotif.position.z = -0.6;

const mukaLokomotif = new THREE.Mesh(kotakA,hitamAspal);
scene5.add(mukaLokomotif);

mukaLokomotif.scale.x = 0.25;
mukaLokomotif.scale.y = 0.2;
mukaLokomotif.scale.z = 0.2;

mukaLokomotif.position.x = 1.12;
mukaLokomotif.position.y = 0.45;
mukaLokomotif.position.z = -0.72;

const tangkiLokomotif = new THREE.Mesh(silinderA,hitamAspal);
scene5.add(tangkiLokomotif);

tangkiLokomotif.position.x = 1.12;
tangkiLokomotif.position.y = 0.37;
tangkiLokomotif.position.z = -0.55;

tangkiLokomotif.scale.x = 0.35;
tangkiLokomotif.scale.y = 0.75;
tangkiLokomotif.scale.z = 0.35;

tangkiLokomotif.rotation.x = 1.6; //awalnya saya kira satuan ini dalam derajat, tetapi mungkin dalam piksel kah?

const cerobong = new THREE.Mesh(silinderB,abuAbu);
scene5.add(cerobong);

cerobong.scale.x = 0.5;
cerobong.scale.y = 0.5;
cerobong.scale.z = 0.5;

cerobong.position.x = 1.12;
cerobong.position.y = 0.48;
cerobong.position.z = -0.45;

const ujungCerobong = new THREE.Mesh(silinderB,merah);
scene5.add(ujungCerobong);

ujungCerobong.scale.x = 0.6;
ujungCerobong.scale.y = 0.1;
ujungCerobong.scale.z = 0.6;

ujungCerobong.position.x = 1.12;
ujungCerobong.position.y = 0.519;
ujungCerobong.position.z = -0.45;

const atapLokomotif = new THREE.Mesh(kotakA,merah);
scene5.add(atapLokomotif);

atapLokomotif.scale.x = 0.27;
atapLokomotif.scale.y = 0.025;
atapLokomotif.scale.z = 0.25;

atapLokomotif.position.x = 1.12;
atapLokomotif.position.y = 0.55;
atapLokomotif.position.z = -0.72;

const rodaLokomotif1 = new THREE.Mesh(kotakA,hitamAspal);
scene5.add(rodaLokomotif1);

rodaLokomotif1.scale.x = 0.35;
rodaLokomotif1.scale.y = 0.08;
rodaLokomotif1.scale.z = 0.08;

rodaLokomotif1.position.x = 1.12;
rodaLokomotif1.position.y = 0.265;
rodaLokomotif1.position.z = -0.75;

const rodaLokomotif2 = new THREE.Mesh(kotakA,hitamAspal);
scene5.add(rodaLokomotif2);

rodaLokomotif2.scale.x = 0.35;
rodaLokomotif2.scale.y = 0.08;
rodaLokomotif2.scale.z = 0.08;

rodaLokomotif2.position.x = 1.12;
rodaLokomotif2.position.y = 0.265;
rodaLokomotif2.position.z = -0.5;

/* Gerbong Kereta */
const gerbong = new THREE.Mesh(kotakA,merah);
scene5.add(gerbong);

gerbong.scale.x = 0.25;
gerbong.scale.y = 0.2;
gerbong.scale.z = 0.5;

gerbong.position.x = 1.12;
gerbong.position.y = 0.35;
gerbong.position.z = -1.15;

const pengait = new THREE.Mesh(kotakA,abuAbu);
scene5.add(pengait);

pengait.scale.x = 0.2;
pengait.scale.y = 0.03;
pengait.scale.z = 0.2;

pengait.position.x = 1.12;
pengait.position.y = 0.28;
pengait.position.z = -0.8;

const rodaGerbong1 = new THREE.Mesh(kotakA,hitamAspal);
scene5.add(rodaGerbong1);

rodaGerbong1.scale.x = 0.35;
rodaGerbong1.scale.y = 0.08;
rodaGerbong1.scale.z = 0.08;

rodaGerbong1.position.x = 1.12;
rodaGerbong1.position.y = 0.265;
rodaGerbong1.position.z = -1;

const rodaGerbong2 = new THREE.Mesh(kotakA,hitamAspal);
scene5.add(rodaGerbong2);

rodaGerbong2.scale.x = 0.35;
rodaGerbong2.scale.y = 0.08;
rodaGerbong2.scale.z = 0.08;

rodaGerbong2.position.x = 1.12;
rodaGerbong2.position.y = 0.265;
rodaGerbong2.position.z = -1.3;

window.addEventListener('resize', function() {
    renderer5.setSize(width, height);
    camera5.aspect = width / height;
    camera5.updateProjectionMatrix();
});

function update5() {
    requestAnimationFrame(update5);
    renderer5.render(scene5, camera5);
}

update5();
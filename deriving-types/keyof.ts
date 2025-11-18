function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key]

  if (val === undefined || val === null) {
    throw new Error('Accessing undefined property')
  }

  return val
}

const buah = {
  nama: 'Pisang',
  namaIlmiah: 'Musa acuminata',
  warna: ['kuning', 'hijau'],
  rasa: 'manis lembut',
  aroma: 'manis netral',
  tekstur: 'lunak dan creamy',
  musim: 'Sepanjang tahun',
  asal: 'Asia Tenggara',
  beratRataRataGram: 120,
  kandunganNutrisi: {
    kalori: 89,
    karbohidrat: '22.8g',
    gula: '12.2g',
    serat: '2.6g',
    vitaminC: '8.7mg',
    kalium: '358mg',
  },
  tingkatKematangan: {
    1: 'Hijau keras – rasa hambar',
    2: 'Hijau kekuningan – mulai manis',
    3: 'Kuning penuh – manis optimal',
    4: 'Kuning dengan bintik coklat – sangat manis',
    5: 'Banyak bintik dan lembek – terlalu matang',
  },
  manfaat: [
    'meningkatkan energi',
    'menjaga kesehatan pencernaan',
    'sumber potassium untuk jantung',
    'mendukung fungsi otot',
  ],
  funFact:
    'Pisang sebenarnya adalah berry, sedangkan stroberi bukan. Hidup memang unik begitu.',
}

const buahProp = getProp(buah, 'namaIlmiah')
console.log(buahProp)

import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  public cIndex = 0
  public viewportWidth = 0
  public inside = false

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.viewportWidth = window.innerWidth
  }

  enter() {
    this.inside = true
  }

  leave() {
    this.inside = false
  }

  getCategory(index: number) {
    this.cIndex = index
  }

  categories = [
    {
      img: '/assets/main/categories/mobile.svg',
      thumbUrl:
        'https://s3.zoommer.ge/site/c7356f77-cec6-4e3d-be99-bb4c7dc1332147ad768b-b8f3-4f50-a38a-c51228515b19.png',
      height: '535.5px',
      heightAfter: '637.5px',
      name: 'მობილურები',
      categories: [
        {
          title: 'მობილურის ბრენდები',
          subCategories: [
            'Apple',
            'Samsung',
            'Xiaomi',
            'Poco',
            'Google',
            'Nothing',
            'OnePlus',
            'Realme',
            'Nokia',
            'Motorola',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ყურსასმენები Buds',
          subCategories: [
            'Apple Airpods',
            'Galaxy Buds',
            'Xiaomi Buds',
            'Sony Buds',
            'Nothing Buds',
            'Realme Buds',
            'JBL Buds',
            'OnePlus Buds',
            'Marshall Buds',
            'Buds-ის აქსესუარები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'სმარტ საათები',
          subCategories: [
            'Apple Watch',
            'Galaxy Watch',
            'Xiaomi Watch',
            'Google Watch',
            'Amazfit Watch',
            'Garmin Watch',
            'საათის აქსესუარები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ფიტნეს ტრეკერები',
          subCategories: ['ფიტნეს ტრეკერები'],
        },
        {
          title: 'მობილურის აქსესუარები',
          subCategories: [
            'ეკრანის დამცავები',
            'მობილურის ქეისები',
            'დამტენი ადაპტერები',
            'უსადენო დამტენები',
            'გარე დამტენი | Power bank',
            'მობილურის სტაბილიზატორები',
            'მანქანის დამტენები',
            'ყურსასმენები',
            'კონექტორები',
            'კაბელები',
            'მანქანის სამაგრები',
            'სათამაშო ტრიგერები',
            'მეხსიერების ბარათი',
            'GPS ტრეკერები',
            'კამერის დამცავები',
            'ყურის ბლუთუსები',
            'სელფის ჯოხები',
            'მობილურის ბეჭდები',
            'OTG ფლეშ მეხსიერებები',
          ],
          viewAll: 'ყველას ნახვა',
        },
      ],
    },
    {
      img: '/assets/main/categories/tablet.svg',
      name: 'ტაბები',
      thumbUrl:
        'https://s3.zoommer.ge/site/862f6b39-7b33-4d35-b88e-733bd98ddcd327038e60-0059-41db-b9a5-92bc344b83e9.png',
      height: '409.5px',
      heightAfter: '487.5px',
      categories: [
        {
          title: 'ტაბები',
          subCategories: ['Apple', 'Samsung', 'Microsoft', 'Xiaomi', 'Lenovo', 'Amazon', 'Realme'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'სმარტ კლავიატურა | კალამი',
          subCategories: [
            'Apple კლავიატურა',
            'Apple კალამი',
            'Microsoft კლავიატურა',
            'Microsoft კალამი',
            'Baseus კლავიატურა',
            'Baseus კალამი',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'გრაფიკული ტაბები',
          subCategories: ['XP-Pen', 'Xiaomi'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'E-Book',
          subCategories: ['Kindle', 'BOOX'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ტაბის აქსესუარები',
          subCategories: [
            'ტაბის ქეისები',
            'ეკრანის დამცავი',
            'USB კაბელი',
            'დამტენი ადაპტერი',
            'კონექტორები',
            'OTG ფლეშ მეხსიერება',
            'მეხსიერების ბარათი',
            'გარე დამტენი | Power Bank',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ყურსასმენები',
          subCategories: ['Headphones', 'Buds', 'Earphones'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'კაბელები',
          subCategories: ['Lightning', 'Micro USB', 'Type-C', 'Aux'],
          viewAll: 'ყველას ნახვა',
        },
      ],
    },
    {
      img: '/assets/main/categories/IT.svg',
      name: 'ლეპტოპები | IT',
      thumbUrl:
        'https://s3.zoommer.ge/site/545a728a-6301-4f2b-8808-74fde50b4ee58c4436a0-6671-4b43-93b2-bb8bc9dd13df.png',
      height: '588px',
      heightAfter: '700px',
      categories: [
        {
          title: 'ბრენდები',
          subCategories: ['Apple', 'Microsoft', 'HP', 'Asus', 'Acer', 'Lenovo', 'Dell', 'MSI', 'Samsung'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ტიპი',
          subCategories: ['Classic', 'Business', 'Gaming'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'გრაფიკული ტაბები',
          subCategories: ['პორტატული SSD', 'პორტატული HDD', 'შიდა SSD', 'ფლეშ მეხსიერებები', 'მეხსიერების ბარათები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'აქსესუარები',
          subCategories: [
            'ლეპტოპის ჩანთები',
            'მაუსები',
            'მაუსპადები',
            'მონიტორის საწმენდები',
            'კლავიატურები',
            'დინამიკები',
            'ლეპტოპის დამტენი',
            'გამაგრილებელი სტენდები',
            'სტრიმინგ მიკროფონები',
            'Web კამერები',
            'ლეპტოპის ჩასადები',
            'კლავიატურის დამცავები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'საოფისე მოწყობილობა',
          subCategories: [
            'პრინტერები',
            'პრინტერის აქსესუარები',
            'Wi-Fi როუტერები',
            'LTE როუტერები',
            'HUB გადამყვანები',
            'UPS კვების წყაროები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'პროექტორები',
          subCategories: [
            'საოფისე პროექტორები',
            'მულტიმედია პროექტორები',
            'პროექტორის დაფები',
            'პრეზენტერები',
            'პროექტორის შტატივები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ყურსასმენები',
          subCategories: [
            'საოფისე პროექტორები',
            'მულტიმედია პროექტორები',
            'პროექტორის დაფები',
            'პრეზენტერები',
            'პროექტორის შტატივები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'კაბელები',
          subCategories: ['Lightning', 'Micro USB', 'Type-C', 'HDMI კაბელები', 'LAN კაბელები'],
          viewAll: 'ყველას ნახვა',
        },
      ],
    },
    {
      img: '/assets/main/categories/smart_house.svg',
      name: 'სმარტ გაჯეტები',
      thumbUrl:
        'https://s3.zoommer.ge/site/f4b45981-3b52-437a-83c8-a22ee98384c0220e91ab-5dbd-49eb-8dc5-61a71de72540.png',
      height: '745.5px',
      heightAfter: '905px',
      categories: [
        {
          title: 'მისაღები',
          subCategories: ['ტელევიზორი', 'მედია პლეერი', 'სმარტ ასისტენტი', 'Wi-Fi როუტერი', 'პროექტორი'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'სახლის მოვლა',
          subCategories: [
            'რობოტი მტვერსასრუტები',
            'ხელის მტვერსასრუტები',
            'პორტატული მტვერსასრუტები',
            'მტვერსასრუტის აქსესუარები',
            'ჰაერის გამწმენდი',
            'ჰაერის დამატენიანებელი',
            'მინის საწმენდი რობოტები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'სამზარეულო',
          subCategories: [
            'აეროგრილი',
            'ჩაიდანი',
            'ბლენდერები',
            'ღვინის გასახსნელი',
            'ინდუქციური ღუმელი',
            'ჭკვიანი ონკანი',
            'სამზარეულოს სასწორი',
            'სმარტ თერმოსი',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'თავის მოვლა',
          subCategories: [
            'თმის უთო',
            'წვერსაპარსი',
            'თმის ფენი',
            'ტრიმერი',
            'კბილის ჯაგრისი',
            'სასწორი',
            'საპნის დისპენსერი',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'მონიტორინგი',
          subCategories: [
            'IP კამერა',
            'ვიდეო რეგისტრატორები',
            'Doorbell',
            'მოძრაობის სენსორი',
            'ტემპერატურის ინდიკატორი',
            'განათების სენსორი',
            'სმარტ ჰაბები',
            'სმარტ ჩამრთველი',
            'GPS ტრეკერები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'სმარტ გადაადგილება',
          subCategories: ['სკუტერები', 'სკუტერის აქსესუარები', 'ელექტრო ველოსიპედები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'Outdoor',
          subCategories: [
            'ექშენ კამერები',
            'ელექტროსადგურები',
            'გარე დამტენი',
            'სმარტ თერმოსი',
            'ფანარი',
            'მანძილმზომი',
            'წყლის ტუმბო',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'სპორტი',
          subCategories: [
            'სარბენი ბილიკები',
            'სმარტ სასწორები',
            'ფიტნეს ტრეკერები',
            'სმარტ საათები',
            'სპორტული ყურსასმენები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'შინაური ცხოველები',
          subCategories: ['საკვების დისპენსერი', 'წყლის დისპენსერი'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'სმარტ განათება',
          subCategories: ['სმარტ ნათურები', 'მაგიდის სანათი', 'განათების სენსორები', 'RGB განათება'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ხელსაწყოები',
          subCategories: ['ელექტრო სახრახნისი | ბურღი', 'სმარტ საზომები', 'კომპრესორები | მუხტის მიმცემი'],
          viewAll: 'ყველას ნახვა',
        },
      ],
    },
    {
      img: '/assets/main/categories/speaker.svg',
      name: 'აუდიო სისტემა',
      thumbUrl:
        'https://s3.zoommer.ge/site/3fcf7a47-5653-4d30-8a22-441f11f1e8f37e3d313b-3746-41d2-bd44-7cefda93ce8f.png',
      height: '483px',
      heightAfter: '575px',
      categories: [
        {
          title: 'ბრენდები',
          subCategories: [
            'JBL',
            'Marshall',
            'Apple',
            'Samsung',
            'Xiaomi',
            'Polaroid',
            'Bose',
            'Sony',
            'Razer',
            'Baseus',
            'Hoco',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'კატეგორიები',
          subCategories: ['ყურსასმენები', 'დინამიკები', 'მიკროფონები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ყურსასმენები',
          subCategories: ['Headphones', 'Buds', 'Wireless', 'Earphones', 'Gaming', 'Bluetooth', 'საბავშვო'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'აკუსტიკური სისტემები',
          subCategories: [
            'პორტატული დინამიკები',
            'სახლის დინამიკები',
            'სმარტ ასისტენტები',
            'ფირსაკრავები',
            'ფირსაკრავის აქსესუარები',
            'PC დინამიკები',
            'სტუდიური დინამიკები',
            'Soundbar',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'Top Audio',
          subCategories: [
            'Sony WH1000 MX4',
            'Apple AirPods Max',
            'Apple AirPods Pro',
            'Bose NC 700',
            'Marshall Major IV',
            'Galaxy Buds Live',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'მიკროფონები',
          subCategories: [
            'სტრიმინგ მიკროფონები',
            'გეიმინგ მიკროფონები',
            'ლაპელური მიკროფონები',
            'უსადენო მიკროფონები',
            'ფოტოაპარატის მიკროფონები',
          ],
          viewAll: 'ყველას ნახვა',
        },
      ],
    },
    {
      img: '/assets/main/categories/joystick.svg',
      name: 'Gaming',
      thumbUrl:
        'https://s3.zoommer.ge/site/0fc55af5-aad0-4ba3-af54-484946588d538c64895c-5253-4d04-97d4-3ec7ef6cd2d7.png',
      height: '483px',
      heightAfter: '575px',
      categories: [
        {
          title: 'PlayStation',
          subCategories: ['PlayStation კონსოლი', 'თამაშები', 'კონტროლერები', 'აქსესუარები', 'VR'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'XBOX',
          subCategories: ['Xbox კონსოლი', 'თამაშები', 'აქსესუარები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'Nintendo',
          subCategories: ['Nintendo კონსოლები', 'თამაშები', 'აქსესუარები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'სხვა კონსოლები',
          subCategories: ['Steam Deck', 'Oculus', 'Backbone', 'Gameboy', 'VR სიმულატორები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'Gaming ლეპტოპები',
          subCategories: [
            'HP Pavilion | Victus | OMEN',
            'ACER Nitro | Predator',
            'Dell Inspiron | Alienware',
            'Lenovo LEGION | LOQ',
            'ASUS ROG | TUF',
            'MSI G Series | Leopard',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'გეიმინგ მონიტორები',
          subCategories: ['BenQ', 'Dell', 'HP'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'გეიმინგ აქსესუარები',
          subCategories: [
            'ყურსასმენები',
            'მაუსები',
            'კლავიატურები',
            'სავარძლები',
            'სათამაშო საჭეები',
            'გამაგრილებელი პედები',
            'დინამიკები',
            'სტრიმინგ მიკროფონები',
            'ვებ კამერები',
            'HDMI & LAN კაბელები',
            'როუტერები',
            'ტრიგერები',
            'RGB განათება',
          ],
          viewAll: 'ყველას ნახვა',
        },
      ],
    },
    {
      img: '/assets/main/categories/TV.svg',
      name: 'TV | მონიტორები',
      thumbUrl:
        'https://s3.zoommer.ge/site/47b4a927-4b47-4b65-bc9c-477677215bebd21a9f80-1a9b-4638-bb67-a8371e9fe45c.png',
      height: '378px',
      heightAfter: '460px',
      categories: [
        {
          title: 'ტელევიზორები',
          subCategories: ['Samsung', 'Xiaomi', 'LG'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'All-in-One',
          subCategories: ['Apple iMac', 'Asus'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'მონიტორები',
          subCategories: ['Acer', 'Asus', 'DELL', 'BenQ', 'Lenovo', 'Xiaomi'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'აუდიო',
          subCategories: ['საუნდბარები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'პროექტორები',
          subCategories: ['ლაზერული პროექტორები', 'პროექტორის დაფები', 'პრეზენტერები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'აქსესუარები',
          subCategories: [
            'ტელევიზორის საკიდები',
            'Web კამერები',
            'Wi-Fi როუტერები',
            'HDMI კაბელები',
            'LAN კაბელები',
            'მონიტორის განათება',
            'მონიტორის საწმენდები',
            'დენის დამაგრძელებელი',
            'RGB განათება',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'მედია პლეერი',
          subCategories: [
            'Xiaomi Mi TV Stick',
            'Xiaomi Mi TV Box',
            'Apple TV',
            'Amazon Fire TV Stick',
            'Google Chromecast',
          ],
          viewAll: 'ყველას ნახვა',
        },
      ],
    },
    {
      img: '/assets/main/categories/photo_camera.svg',
      name: 'ფოტო | ვიდეო',
      thumbUrl:
        'https://s3.zoommer.ge/site/0005801e-d729-43e9-b62f-9e90c6fa9b062d081f78-1a59-4d09-ae9c-4a2ea6899a6e.png',
      height: '378px',
      heightAfter: '450px',
      categories: [
        {
          title: 'ფოტოგრაფია',
          subCategories: ['Canon', 'Nikon', 'Sony'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ოპტიკა',
          subCategories: ['ტელესკოპები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'აქსესუარები',
          subCategories: [
            'ობიექტივები | ლინზა',
            'Gimbal სტაბილიზატორები',
            'Speedlite განათებები',
            'შტატივები',
            'სტუდიური განათებები',
            'უსადენო მიკროფონები',
            'ფოტოაპარატის ჩანთები',
            'მეხსიერების ბარათები',
          ],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'დრონები',
          subCategories: ['DJI დრონები', 'დრონის აქსესუარები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ექშენ კამერები',
          subCategories: ['GoPro', 'DJI Osmo', 'აქსესუარები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ფოტო პრინტერები',
          subCategories: ['Canon', 'Xiaomi', 'Polaroid', 'Polaroid-ის აქსესუარები'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'ვიდეო მონიტორინგი',
          subCategories: ['IP კამერები', 'ვიდეო რეგისტრატორები', 'Doorbell'],
          viewAll: 'ყველას ნახვა',
        },
        {
          title: 'Smartphone ფოტოგრაფია',
          subCategories: ['Osmo Mobile', 'ვლოგის ნაკრები', 'ლაპელური მიკროფონები', 'Tripod | სელფის ჯოხი'],
          viewAll: 'ყველას ნახვა',
        },
      ],
    },
  ]
}

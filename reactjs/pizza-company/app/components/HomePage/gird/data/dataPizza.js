const data = {
  salecomboData: [
    {
      id: 0,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003775_combo-tien-loi-1_300.png',
      title: '#unBox1',
      des:
        'Tiết kiệm: 50% (phù hợp cho 1 người). Combo sẽ bao gồm: 01 Pizza Classic size S. 01 Bánh mì que nướng/ Bánh mì bơ tỏi/ Khoai tây chiên/ Khoai tây lắc phô mai.',
      price: '99.000đ',
    },
    {
      id: 2,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003752_combo-tien-loi-2_300.png',
      title: 'unBox2',
      des:
        'Tiết kiệm: 44% (phù hợp cho 2 người). Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ. Nửa phần Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi. Nửa phần Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.',
      price: '119.000đ',
    },
    {
      id: 3,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003753_combo-tien-loi-3_300.png',
      title: 'unBox3',
      des:
        'Tiết kiệm: 42% (phù hợp cho 2-3 người). Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ. 1 Mỳ Ý bất kỳ . 1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi. 1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.',
      price: '259.000đ',
    },
    {
      id: 4,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003754_combo-tien-loi-4-ec_300.png',
      title: 'unBox4',
      des:
        'Tiết kiệm: 39% (phù hợp cho 2-3 người). Combo sẽ bao gồm: 2 Pizza Classic, cỡ Nhỏ. 1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi. 1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.',
      price: '259.000đ',
    },
    {
      id: 5,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003755_combo-tien-loi-5-ec_300.png',
      title: 'unBox5',
      des:
        'Tiết kiệm: 39% (phù hợp cho 2-3 người). Combo sẽ bao gồm: 2 Pizza Classic, (Đế Dày/ Mỏng, cỡ Vừa). 1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi. 1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.',
      price: '359.000đ',
    },
    {
      id: 6,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003756_combo-tien-loi-6_300.png',
      title: 'unBox6',
      des:
        'Tiết kiệm: 38% (phù hợp cho 2-3 người). Combo sẽ bao gồm: 1 Pizza Classic, (Đế Dày/ Mỏng, cỡ Vừa). 2 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi. 1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai. 2 Mỳ Ý bất kỳ.',
      price: '459.000đ',
    },
    {
      id: 7,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002963_hde-discount-50-pizza-2_300.png',
      title: 'Tiết kiệm 50% Pizza',
      des: 'Tiết kiệm 50% cho pizza thứ 2 khi mua kèm đồ uống.',
      price: '377.000đ',
    },
    {
      id: 8,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003720_bogo-t3_l_300.jpeg',
      title: 'Mua 1 tăng 1 Pizza size L - Thứ 3',
      des: 'Mua 1 Pizza size L tặng 1 Pizza Classic (Chảo/Mỏng, cùng size).',
      price: '299.000đ',
    },
    {
      id: 9,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003720_bogo-t3_l_300.jpeg',
      title: 'Mua 1 tăng 1 Pizza size M - Thứ 3',
      des: 'Mua 1 Pizza size M tặng 1 Pizza Classic (Đảo/Mỏng, cùng size)',
      price: '249.000đ',
    },
    {
      id: 10,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003720_bogo-t3_l_300.jpeg',
      title: 'Mua 1 tăng 1 Pizza size L - Thứ 4',
      des: 'Mua 1 Pizza size L tặng 1 Pizza Classic (Chảo/Mỏng, cùng size).',
      price: '299.000đ',
    },
    {
      id: 11,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003720_bogo-t3_l_300.jpeg',
      title: 'Mua 1 tăng 1 Pizza size M - Thứ 4',
      des: 'Mua 1 Pizza size M tặng 1 Pizza Classic (Chảo/Mỏng, cùng size).',
      price: '249.000đ',
    },
  ],

  pizzaData: [
    {
      id: 12,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003102_seafood-peach_300.png',
      title: 'Pizza Hải Sản Đào',
      des: 'Tôm, Đào hoà quyện bùng nổ cùng sốt Thousand Island',
      price: '169.000đ',
    },
    {
      id: 13,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png',
      title: 'Pizza Hải Sản Pesto Xanh',
      des:
        'Tôm, thanh cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh',
      price: '169.000đ',
    },
    {
      id: 14,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002216_shrimp-ctl_300.png',
      title: 'Pizza Tôm Cocktail',
      des: 'Tôm với nấm, dứa, cà chua và sốt Thousand Island.',
      price: '149.000đ',
    },
    {
      id: 15,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002212_sf-cocktail_300.png',
      title: 'Pizza Hải Sản Cocktail',
      des: 'Tôm, cua, giăm bông,... với sốt Thousand Island',
      price: '149.000đ',
    },
    {
      id: 16,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002211_tropical-sf_300.png',
      title: 'Pizza Hải Sản Nhiệt Đới',
      des: 'Tôm, nghêu, mực cua, dứa với sốt Thousand Island',
      price: '149.000đ',
    },
    {
      id: 17,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002214_sf-deluxe_300.png',
      title: 'Pizza Hải Sản Cao Cấp',
      des: 'Tôm, cua, mực và nghêu với sốt Marinara',
      price: '149.000đ',
    },
    {
      id: 18,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002218_sup-deluxe_300.png',
      title: 'Pizza 5 Loại Thịt Đặc Biệt Và Rau Củ',
      des:
        'Xúc xích bò, giăm bông, thịt xông khói,...và cả thế giới rau phong phú.',
      price: '139.000đ',
    },
    {
      id: 19,
      img: 'https://thepizzacompany.vn/images/thumbs/000/0003536_aloha_300.png',
      title: 'Pizza Aloha',
      des:
        'Thịt nguội, xúc xích tiêu cay và dứa hòa quyện với sốt Thousand Island',
      price: '139.000đ',
    },
    {
      id: 20,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002224_hawaii_300.png',
      title: 'Pizza Hawaiian',
      des: 'Giăm bông, thịt muối và dứa',
      price: '119.000đ',
    },
    {
      id: 21,
      img: 'https://thepizzacompany.vn/images/thumbs/000/0002229_veg_300.png',
      title: 'Pizza Rau Củ',
      des: 'Hành, ớt chuông, nấm, dứa, cà chua',
      price: '119.000đ',
    },
  ],
  gardenData: [
    {
      id: 22,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003665_grilledbeefhibiscus_300.png  ',
      title: 'Pizza Bolalo Hibiscus',
      des:
        'Thịt bò cuộn lá lốt nướng thơm lừng kết hợp độc đáo cùng mứt Hibiscus chua chua ngọt ngọt & các loại rau củ trên nền sốt Bò bằm đậm vị mang lại trải nghiệm ẩm thực tuy lạ mà quen',
      price: '149.000đ',
    },
    {
      id: 23,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003668_fruitsaladbaconpeachsauce_300.png',
      title: 'Salad Trái Cây Sốt Đào',
      des:
        'Các loại trái cây thanh mát: đào, thanh long, táo, dưa hấu, cà chua bi hoà quyện cùng xốt Đào chua ngọt đặc trưng dùng kèm thịt xông khói.',
      price: '89.000đ',
    },
    {
      id: 24,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003669_pasta-seafood-w-pesto-sauce_500.png',
      title: 'Mì Ý Pesto',
      des:
        'Các loại nguyên liệu hải sản hảo hạng: Tôm, mực hoà quyện trên nền sốt Pesto xanh đậm vị, thơm hương đặc trưng từ lá húng tây – mang đậm nét truyền thống ẩm thực Ý.',
      price: '149.000đ',
    },
    {
      id: 25,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003667_ham-mushroom-w-cream-truffle-sause_300.png',
      title: 'Mỳ Ý Truffle',
      des:
        'Nấm Truffle đen với hương thơm ngất ngây, phủ trên lớp sốt kem nấm beo béo đậm đà cùng thịt giăm bông mềm mại.',
      price: '149.000đ',
    },
  ],
  starterData: [
    {
      id: 26,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003280_crispy-chicken-with-k-sauce2pcs_300.png',
      title: 'Gà Giòn Xốt Hàn - Truyền Thống (2 miếng)',
      des: 'Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.',
      price: '99000',
    },
    {
      id: 27,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003282_crispy-chicken-with-k-sauce5pcs_300.png',
      title: 'Gà Giòn Xốt Hàn - Truyền Thống (5 miếng)',
      des: 'Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.',
      price: '249000',
    },
    {
      id: 28,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003291_crispy-chicken-with-k-sauce9pcs_300.png',
      title: 'Gà Giòn Xốt Hàn - Truyền Thống (9 miếng)',
      des: 'Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.',
      price: '429000',
    },
    {
      id: 29,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003284_crispy-chicken-with-sg-sauce2pcs_300.png',
      title: 'Gà Giòn Xốt Tương Tỏi Hàn Quốc (2 miếng)',
      des:
        'Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi mang đến cảm giác mới lạ khi thưởng thức.',
      price: '99000',
    },
    {
      id: 30,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003286_crispy-chicken-with-sg-sauce5pcs_300.png',
      title: 'Gà Giòn Xốt Tương Tỏi Hàn Quốc (5 miếng)',
      des:
        'Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi mang đến cảm giác mới lạ khi thưởng thức.',
      price: '249000',
    },
    {
      id: 31,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003288_crispy-chicken-with-spicy-k-sauce2pcs_500.png',
      title: 'Gà Giòn Xốt Hàn - Cay (2 miếng)',
      des: 'Phục vụ kèm xốt mù tạc mật ong và củ cải lên men.',
      price: '99000',
    },
    {
      id: 32,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003287_crispy-chicken-with-sg-sauce9pcs_300.png',
      title: 'Gà Giòn Xốt Tương Tỏi Hàn Quốc (9 miếng)',
      des:
        'Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi mang đến cảm giác mới lạ khi thưởng thức.',
      price: '429000',
    },
    {
      id: 33,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003289_crispy-chicken-with-spicy-k-sauce5pcs_300.png',
      title: 'Gà Giòn Xốt Hàn - Cay (5 miếng)',
      des: 'Phục vụ kèm xốt mù tạc mật ong và củ cải lên men.',
      price: '249000',
    },
    {
      id: 34,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002243_potato-basket_300.jpeg',
      title: 'Giỏ Khoai Tây Chiên',
      des: 'Sự kết hợp của nhiều kiểu chế biến khoai tây',
      price: '89000',
    },
    {
      id: 35,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002242_squid-rings_300.jpeg',
      title: 'Mực Chiên Giòn',
      des: 'Mực tẩm bột chiên giòn dùng kèm sốt ngò tây',
      price: '119000',
    },
  ],
  saladData: [
    {
      id: 36,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002600_chicken-strip-salad_300.png',
      title: 'Salad Gà Giòn Không Xương',
      des:
        'Salad Gà giòn với trứng cút, thịt xông khói, phô mai parmesan và sốt Thousand Island.',
      price: '89000',
    },
    {
      id: 37,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002601_crispy-salmon-skin-salad_300.png',
      title: 'Salad Da Cá Hồi Giòn',
      des:
        'Salad với da cá hồi giòn với bắp cải đỏ, cà chua bi, ngô với sốt Yuzu',
      price: '89000',
    },
    {
      id: 38,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002250_signature-salad_300.png',
      title: 'Salad Đặc Sắc',
      des:
        'Salad rau và trái cây tươi dùng kèm xốt kem đặc biệt của The Pizza Company.',
      price: '89000',
    },
    {
      id: 39,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002251_caesars-salad_300.png',
      title: 'Salad Trộn Sốt Caesar',
      des: 'Rau tươi trộn với sốt Caesar.',
      price: '99000',
    },
    {
      id: 40,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002252_garden-salad_300.png',
      title: 'Salad Trộn Dầu Giấm',
      des: 'Rau với sốt dầu giấm.',
      price: '79000',
    },
    {
      id: 41,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0003275_cabbage-salad_300.png',
      title: 'Salad Bắp Cải',
      des: '',
      price: '39000',
    },
  ],
  drinkData: [
    {
      id: 42,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002573_pepsi-lime-can_300.png',
      title: 'Pepsi Black Lime Lon',
      des: '',
      price: '29000',
    },
    {
      id: 43,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002420_pepsi-black-can_300.jpeg',
      title: 'Pepsi Black Lon',
      des: '',
      price: '29000',
    },
    {
      id: 44,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002365_pepsi-can_300.jpeg',
      title: 'Pepsi Lon',
      des: '',
      price: '29000',
    },
    {
      id: 45,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002702_mirinda-soda-kem-can_300.png',
      title: 'Mirinda Soda Kem Lon',
      des: '',
      price: '29000',
    },
    {
      id: 46,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002436_heineken_300.png',
      title: 'Bia Heineken',
      des: '',
      price: '49000',
    },
    {
      id: 47,
      img:
        'https://thepizzacompany.vn/images/thumbs/000/0002434_333-beer_300.png',
      title: 'Gà Giòn Xốt Hàn - Cay (2 miếng)',
      des: '',
      price: '49000',
    },
  ],
};

export default data;

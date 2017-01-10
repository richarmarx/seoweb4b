'use strict';

// Lucky wheel values
var lucky_wheel = {
    fifa: [
        'images/items/fifa1.png',
        'images/items/fifa2.png',
        'images/items/fifa3.png',
        'images/items/fifa4.png',
        'images/items/fifa5.png',
        'images/items/fifa6.png'
    ],
    lol: [
        'images/items/lol1.png',
        'images/items/lol2.png',
        'images/items/lol3.png',
        'images/items/lol4.png',
        'images/items/lol5.png',
        'images/items/lol6.png'
    ]
};

// change the value inside the single quotes with corresponding values
angular.module('app', ['ngSanitize']).controller('MainCtrl', function ($scope) {

    // Text
    $scope.text = {
        menu_lucky_wheel: 'Vòng quay may mắn',
        menu_explore: 'Khám phá',
        menu_mobile_game: 'Mobile games',
        menu_chat: 'Chat',
        menu_guide: 'Hướng dẫn',
        menu_download: 'Tải miễn phí',

        garena_plus_mobile: 'Ứng dụng Garena Plus trên di động',
        view_guide: 'Xem hướng dẫn cài đặt',

        lol_btn: 'LoL',
        fifa_btn: 'FO3',

        chat: 'Chat',
        chat_description: 'Kết nối Garena+ mọi lúc mọi nơi',

        lucky_wheel: 'Vòng quay may mắn',
        lucky_wheel_description: 'Tham gia quay thưởng để nhận nhiều phần quà hấp dẫn, miễn phí',

        explore_the_world: 'Khám phá thế giới',
        explore_now:'Ngay',
        explore: 'Khám phá',
        explore_description: 'Tìm hiểu, khám phá thế giới game',

        mobile_game_title: 'Mobile games',
        mobile_game_description: 'Hàng loạt game trên điện thoại sắp ra mắt',
        coming_soon: 'Sắp ra mắt',
        download_new_version: 'Tải ngay phiên bản mới nhất',

        guide_title: 'Hướng dẫn cài đặt',

        support_tile:'Hỗ trợ',
        support_description: 'Tổng đài hỗ trợ',
        support_call: 'Gọi',
        support_email: 'Phản hồi',
        support_garenaplus: 'Garena+',
        contact_title: 'Liên hệ với chúng tôi',

        social_title: 'Kết nối với chúng tôi',
        social_description: 'Để nhận nhiều thông tin hơn từ mạng xã hội',
        copyright: ''
    };
    //  copyright: '©opyright 2016 '+ str + ' All rights reserved.'
   // $scope += '©opyright 2016 '+ str + ' All rights reserved.';
    // Carousel

     $scope.carousel = {
        lol: [
            {
                image_src: 'images/slide1.jpg',
                content: 'Chia sẻ thông tin và bí kíp độc cho game thủ'
            }, {
                image_src: 'images/slide2.jpg',
                content: 'Kho hình ảnh Artwork và cosplay đồ sộ'
            }, {
                image_src: 'images/slide3.jpg',
                content: 'Tổng hợp video bổ ích và vui nhộn'
            }
        ],
        fifa: [
            {
                image_src: 'images/slide4.jpg',
                content: 'Kho thông tin cầu thủ cập nhật thường xuyên'
            }, {
                image_src: 'images/slide5.jpg',
                content: 'Tìm kiếm, so sánh và theo dõi cầu thủ yêu thích'
            }, {
                image_src: 'images/slide6.jpg',
                content: 'Giá bán cầu thủ cập nhật mỗi ngày'
            }
        ]
    };

    // Games
    $scope.games = [
        {
            image_src : 'images/game1.png',
            content: 'Sắp ra mắt'
        },{
            image_src : 'images/game2.png',
            content: 'Sắp ra mắt'
        },{
            image_src : 'images/game3.png',
            content: 'Sắp ra mắt'
        },

    ];

    // Download
    $scope.download = {
        ios: 'https://itunes.apple.com/vn/app/gas-mobile/id857669215',
        android: 'http://cdn.vn.garenanow.com/gxx/mobile/android/garena_VN.apk'
    };

    // Guide
    $scope.guide = {
        step1: {
            image_src: 'images/install_step1.png',
            content: 'Vào Cài đặt thiết bị, sau đó chọn Bảo mật và đánh dấu "Không rõ nguồn gốc"'
        },
        step2: {
            image_src: 'images/install_step2.png',
            content: 'Tải tập tin Garena APK từ đường dẫn http://mobile.garena.vn và chọn "Đồng ý"'
        },
        step3: {
            image_src: 'images/install_step3.png',
            content: 'Mở tập tin APK. Chọn "Tiếp theo" sau đó chọn "Cài đặt" để cài đặt.'
        },
        step4: {
            image_src: 'images/install_step4.png',
            content: 'Chọn "Mở" để bắt đầu sử dụng Garena Mobile.'
        }
    };

    // Form Placeholder

    $scope.form = {
        name: 'Tên',
        mail: 'Mail',
        message: 'Nội dung',
        send: 'Gửi phản hồi'
    };

    // Support Info
    $scope.support = {
        phone: '',
        email: 'gascs@cocc-vn.com',
        garenaplus: 'GAS_CS'
    };

    // Social URL
    $scope.social = {
        github: '',
        flickr: '',
        vimeo: '',
        twitter: '',
        facebook: 'https://www.facebook.com/GarenaMoblieVN/',
        google: 'https://plus.google.com/110658210029456579150',
        pinterest: '',
        tumblr: '',
    };
});
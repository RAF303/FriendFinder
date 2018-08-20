var pepole = [{
        name: "LeBron James",
        photo: 'https://images.tmz.com/2018/08/09/0809-lebron-james-lakers-com-4.jpg',
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "James Harden",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiPievyxfzcAhWO_YMKHW7cDcIQjRx6BAgBEAU&url=https%3A%2F%2Fclutchpoints.com%2Frockets-news-james-harden-tweets-about-injured-hamstring%2F&psig=AOvVaw3sZ_glGe1YLKUkFAu3obrY&ust=1534885951715938',
        scores: [
            5,
            4,
            3,
            4,
            5,
            2,
            2,
            5,
            1,
            4
        ]
    },
    {
        name: "Stephen Curry",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiE4qPuxvzcAhWM4IMKHX7BDoEQjRx6BAgBEAU&url=http%3A%2F%2Fwww.sportingnews.com%2Fus%2Fnba%2Fnews%2Fstephen-curry-golden-state-warriors-news-girls-basketball-camp-shoes%2Furgu8iyu6x80146ohtqxm9plh&psig=AOvVaw2rSKNFMK7ZUyTI3kIsHjss&ust=1534886117332080',
        scores: [
            1,
            2,
            1,
            1,
            3,
            4,
            5,
            5,
            1,
            1
        ]
    },
    {
        name: "Kyrie Irving",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi0-a6Lx_zcAhUCyoMKHRD5B3cQjRx6BAgBEAU&url=https%3A%2F%2Fwww.yardbarker.com%2Fnba%2Farticles%2Fboston_should_be_worried_about_kyrie_irving%2Fs1_11773_27017012&psig=AOvVaw0Awc62TRpkoTf0M5rjcmmW&ust=1534886270579798',
        scores: [
            5,
            4,
            4,
            4,
            1,
            5,
            5,
            5,
            2,
            5
        ]
    },
    {
        name: "Chris Paul",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjgyuCpx_zcAhVM2oMKHfBsABMQjRx6BAgBEAU&url=http%3A%2F%2Fwww.sportingnews.com%2Fus%2Fnba%2Fnews%2Fchris-paul-injury-update-mike-dantoni-houston-rockets-guard-game-time-decision-game-7-western-conference-finals%2F1lyhpv4zmjqot178uj0yx6elyi&psig=AOvVaw2YQzzti-mGtUd6JzowZHad&ust=1534886336598321',
        scores: [
            2,
            4,
            3,
            2,
            1,
            1,
            4,
            2,
            2,
            3
        ]
    },
    {
        name: "Carmelo Anthony",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi8hrXVx_zcAhUPoYMKHUQdDTIQjRx6BAgBEAU&url=https%3A%2F%2Fnugglove.com%2F2018%2F07%2F06%2Fdenver-nuggets-pros-cons-carmelo%2F&psig=AOvVaw1qUt0wa4rItTZbj6SiZPcz&ust=1534886418934488',
        scores: [
            1,
            1,
            2,
            3,
            1,
            2,
            2,
            1,
            2,
            1
        ]
    },
    {
        name: "Joel Embid",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjqw4L3x_zcAhUh5YMKHeNBBi0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.nj.com%2Fsixers%2Findex.ssf%2F2018%2F02%2Fwhat_does_sixers_joel_embiid_think_about_the_marke.html&psig=AOvVaw2S6IYYNFgBf__p-nJHqYft&ust=1534886494746401',
        scores: [
            4,
            4,
            5,
            4,
            5,
            4,
            3,
            5,
            4,
            5
        ]
    },
    {
        name: "Jamal Murray",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjTloOZyPzcAhUrw4MKHa4XA5kQjRx6BAgBEAU&url=https%3A%2F%2Fhoopshabit.com%2F2017%2F10%2F31%2Fdenver-nuggets-jamal-murray-early-disappointment%2F&psig=AOvVaw28ihkOLXsCIlSd9PJKjh2M&ust=1534886564385852',
        scores: [
            3,
            2,
            1,
            4,
            5,
            5,
            3,
            1,
            3,
            5
        ]
    },
    {
        name: "Anthony Davis",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjp7I-5yPzcAhWs34MKHcxGBjMQjRx6BAgBEAU&url=https%3A%2F%2Fftw.usatoday.com%2F2018%2F01%2Fanthony-davis-boston-celtics-trade-patriots&psig=AOvVaw1af5Qu4Hcj0Lfz0H7P_NRB&ust=1534886635253547',
        scores: [
            4,
            3,
            2,
            3,
            5,
            2,
            1,
            1,
            3,
            2
        ]
    },
    {
        name: "Nikola Jokic",
        photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi_-cPpyPzcAhVB94MKHUxaDs4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.sportingnews.com%2Fus%2Fnba%2Fnews%2Fnikola-jokic-max-contract-denver-nuggets-free-agency-nba-lebron-paul-george%2F1pqqmiifkdc0b13dogeb5ev813&psig=AOvVaw0rn7qypYCTTuywHl_6n8nG&ust=1534886721062648',
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    }
]
module.exports = pepole;
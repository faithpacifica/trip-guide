import styled from 'styled-components';

export const ThemeSwitcherButton = styled.button`
    border:none;
    border-radius:8px;
    background-color:${(props) => props.theme.backgroundColor};
    color:#84878B};
    padding:10px 20px;
    font-size: ${(props) => props.theme.fontSize};
`;

export const BreadcrumpTheme = styled.div`
    color:${(props) => props.theme.IconColor}
` ;

export const FilterLabelTheme = styled.div`
label:${(props) => props.theme.FilterLabel}
    `;


export const DarkTheme = {
    WifiIconColor:'#B1B5C4',
    Hr:' #222529',
    FeatureDetailsTitle:'#E7ECF3',
    LocationBorder:'#E6E8EC',
    HotelLocation:'#84878B',
    SingleHotelInfoTitle:'#fff',
    DetailsBg:'#141416',
    DetailsTitle:'#FCFCFD',
    ListCarBorder:'#3B3E44',
    ListCardReview:'#B1B5C4',
    ServiceType:'#E7ECF3',
    ListCardTitle:'#fff',
    PriceInterval:'#F4F5F6',
    SelectedPrice:'#316BFF',
    FilterInput:'#222529',
    Filterh5:'#fff',
    FilterLabel:'#E7ECF3',
    IconColor:'#fff',
    BodyBg:'#141416',
    ModeSwitcherBg:'#3B3E44',
    FooterBg: '#222529',
    FooterColor:'white',
    Footerh4:'#fff',
    PassionBg:"#141416",
    TrendingBg:'#18191B',
    TrendingH2:'white',
    TrendingCardBg:'#222529',
    TrendingCardH:'#FCFCFD',
    TrendingCardReview:'#B1B5C4',
    TrendingCardPrice:'#F4F5F6',
    ExploreWorldBg:'#141416',
    ExploreWorldTitle:'white',
    TrendingText:'#B1B5C4',
    ExploreWorldCard:'#222529',
    ExploreCardTitle:' #FCFCFD',
   BestCardHoverBg:'#222529',
   PlacesCardTitle:'#E7ECF3',
   PlacesCardText:'#777E90',
   HeaderBg:'#222529',
   Bell:'#fff',
   SearchNavbarFieldBg:'#3B3E44',
   SearchNavbarBg:'#222529',
   SearchNavbarLabel :'white',
   HotelListBg:'#141416',
   HotelListnavbarBg:'#222529',
   ViewAllBtn:'#fff'
};

export const LightTheme = {
    WifiIconColor:'#353945',
    Hr:'#E6E8EC',
    FeatureDetailsTitle:' #23262F',
    LocationBorder:' #222529',
    HotelLocation:'#777E91',
    SingleHotelInfoTitle:'#23262f',
    DetailsBg:'#FAFAFB',
    DetailsTitle:'#252525',
    ListCarBorder:'#E7ECF3',
    ListCardReview:'#3B3E44',
    ServiceType:'#3B3E44',
    ListCardTitle:'#23262F',
    PriceInterval:'#3B3E44',
    SelectedPrice:'#0A2541',
    FilterInput:'#fff',
    Filterh5:'#141416',
    FilterLabel:'#3B3E44',
    IconColor:'#3B3E44',
    Body:'#fff',
    ModeSwitcherBg:'#fff',
    FooterBg: '#f4f5f6',
    FooterColor:'#84878B',
    Footerh4:'#222529',
    PassionBg:"#FBFBFB",
    TrendingBg:'#F5F5F5',
    TrendingH2:'#222529',
    TrendingCardBg:'#fff',
    TrendingCardH:'#282832',
    TrendingCardReview:'#3B3E44',
    TrendingCardPrice:'#3B3E44',
    ExploreWorldBg:'#FBFBFB',
    ExploreWorldTitle:'#141416',
    TrendingText:'#3B3E44',
    ExploreWorldCard:'#fff',
    ExploreCardTitle:' #3B3E44',
    BestCardHoverBg:'#FFFFFF',
    PlacesCardTitle:'#3B3E44',
    PlacesCardText:'#84878B',
    HeaderBg:'#fff',
    Bell:'#000',
    SearchNavbarFieldBg:' #F4F5F7',
    SearchNavbarBg:'#fff',
    SearchNavbarLabel :'#3B3E44',
    HotelListBg:'#FAFAFB',
    HotelListnavbarBg:'#FFFFFF',
    ViewAllBtn:'#141416'
};

export const MyContainer = styled.div`
    width:'100%',
    maxWidth:'1170px',
    margin:' 0 auto'
`;

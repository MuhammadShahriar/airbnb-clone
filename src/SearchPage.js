import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResults from './SearchResults'

function SearchPage() {
    return (
        <div className = "searchPage" >
            <div className = "searchPage__info">
                <p>
                    62 stays . 26 august to 30 august . 2 guest
                </p>

                <h1>Stays nearby</h1>

                <Button variant = "outlined">
                    Cancellation Flexibility
                </Button>
                
                <Button variant = "outlined">
                    Type of place
                </Button>
                
                <Button variant = "outlined">
                    Price
                </Button>

                <Button variant = "outlined">
                    Rooms and beds
                </Button>

                <Button variant = "outlined">
                    More filters
                </Button>
            </div>

                
            <SearchResults
                img="https://media.cntraveler.com/photos/5ebaf1ad19a3d1d15f47c34b/16:9/w_1600,c_limit/airbnb-lake-25135093.jpg"
                location="Private room in center of London"
                title="Independent luxury studio apartment"
                description="2 guest . 3 bedroom . 1 bed . 1.5 shared. bathrooms  . wifi . Kitchen . Free parking . Washing Matchin"
                star={4.73}
                total="£117 total"
                price="£30 / night"
            />

            
            <SearchResults
                img="https://s3-ap-southeast-1.amazonaws.com/bengkel/wp-content/uploads/2017/03/27114830/gravity-home-apartment.jpg"
                location="Private room in center of London"
                title="Stay at this sparious Edwardian Mouse"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared. bathrooms  . wifi . Kitchen . Free parking . Washing Matchin"
                star={4.73}
                total="234 total"
                price="£45 / night"
            />

            
            <SearchResults
                img="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=697%2C465"
                location="Private room in center of London"
                title="Stay at this sparious Edwardian Mouse"
                description="4 guest . 2 bedroom . 1 bed . 1.5 shared. bathrooms  . wifi . Kitchen . Free parking . Washing Matchin"
                star={4.1}
                total="£700 total"
                price="£39/night"
            />

            
            <SearchResults
                img="https://media.timeout.com/images/105202663/630/472/image.jpg"
                location="Private room in center of London"
                title="Stay at this sparious Edwardian Mouse"
                description="5 guest . 2 bedroom . 1 bed . 1.5 shared. bathrooms  . wifi . Kitchen . Free parking . Washing Matchin"
                star={3.73}
                total="£345 total"
                price="£35/night"
            />

            
                
        </div>
    )
}

export default SearchPage

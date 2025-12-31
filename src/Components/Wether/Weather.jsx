import React from 'react'
import AddToFavourite from './AddToFavourite'
import WeatherHeadline from './WeatherHeadline'
import WeatherConditions from './WeatherConditions'

export default function Weather() {
  return (
   <section class="">
			<div class="container">
				<div
					class="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[300px] max-w-[820px] mx-auto">
					<div class="grid md:grid-cols-2 gap-10 md:gap-6">
						<div class="md:col-span-2">
							<AddToFavourite />
						</div>
						<WeatherHeadline />
						<WeatherConditions />
					</div>
				</div>
				
			</div>
		</section>
  )
}

import React from 'react'

export default function Weather() {
  return (
   <section class="">
			<div class="container">
				<div
					class="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
					<div class="grid md:grid-cols-2 gap-10 md:gap-6">
						<div class="md:col-span-2">
							<div class="flex items-center justify-end space-x-6">
								<button class="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
									<span>Add to Favourite</span>
									<img src="./assets/heart.svg" alt="" />
								</button>
								
							</div>
						</div>
						<div>
							<div class="max-md:flex items-center justify-between md:-mt-10">
								<img src="./assets/cloud.svg" alt="cloud" />
								<div class="max-md:flex items-center max-md:space-x-4">
									<h1 class="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">16°</h1>
									<div class="flex items-center space-x-4 md:mb-4">
										<img src="./assets/pin.svg" />
										<h2 class="text-2xl lg:text-[50px]">Dhaka</h2>
									</div>
								</div>
							</div>
							<p class="text-sm lg:text-lg">06:09 - Sunday, 9 Dec ‘23</p>
						</div>
						<div>
							<p class="text-sm lg:text-lg font-bold uppercase mb-8">thunderstorm with light drizzle</p>
							<ul class="space-y-6 lg:space-y-6">
								<li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Temp max</span>
									<div class="inline-flex space-x-4">
										<p>19°</p>
										<img src="./assets/icons/temp-max.svg" alt="temp-max" />
									</div>
								</li>
								<li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Temp min</span>
									<div class="inline-flex space-x-4">
										<p>19°</p>
										<img src="./assets/icons/temp-min.svg" alt="temp-min" />
									</div>
								</li>
								<li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Humadity</span>
									<div class="inline-flex space-x-4">
										<p>58%</p>
										<img src="./assets/icons/humidity.svg" alt="humidity" />
									</div>
								</li>
								<li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Cloudy</span>
									<div class="inline-flex space-x-4">
										<p>86%</p>
										<img src="./assets/icons/cloud.svg" alt="cloudy" />
									</div>
								</li>
								<li class="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Wind</span>
									<div class="inline-flex space-x-4">
										<p>5km/h</p>
										<img src="./assets/icons/wind.svg" alt="wind" />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
		</section>
  )
}

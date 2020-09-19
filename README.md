## Inspiration
Research from Food Watch highlights that consumers are looking for different aspects of Honest Products, such as Nutritional Quality, Carbon Footprint, Organic, Vegan.Manufacturers can't possibly print everything on the pack and some marketing claims may be misleading. Brand owners and retailers are not able to provide each consumer with relevant insights in an individual level, at the moment they are buying their groceries.Producers and retailers need more insights about the consumer's decision making process and their preferences + Consumers need information at the right time to help them make a sustainable choice, given their food restrictions and health concerns.

## What it does
We have developed a platform wherein each user can choose products which are align with their values and goals in life.

It allows users to select aspects of products which are important to them, such as:
Nutriscore
Organic
CO2 footprint
Plastic-Free
Vegan
Gluten Free
etc
Then user can clearly see how the products they want to purchase compare across those attributes.

## How it was built
1) An AI recommendation system based on the users previous purchase history is implemented. 
2) Product categories which the user is passionate about are recommended to him by analysing trends in his buying patterns.
3) A brief summary of what kinds of different products he has used in the past is displayed, so that the user is aware of those parameters. If a user is engaged in buying sustainable and eco-friendly products from time and again, he is rewarded with Green Points, which can be redeemed in form of coupon codes.
4) The Atrify data set was analysed to get information about a products Nutriscore, CO2 footprints, and other categorization, for enhanced decision-making.
5) A user can also view the products he bought in the past, and the app will recommend healthy alternatives to the same products.

## Tools used
JavaScript, React, Python, Atrify API, Google Cloud, Flask

## Prerequisites
Before running this locally you must have Node installed

## Development

1. ```git clone https://github.com/jui2010/Immunize```
2. ```npm install```
3. ```npm start```

## Challenges we ran into
Tricky to get product-level CO2 footprint. Nutriscore information is not always perfect. Defining fresh products is only possible with access to "use by" dates.

## What's next for GoodFood
Include a location-wise grouping of retailers who sell sustainable/healthy products, so users can find them easily
Include more dimensions for customers to predict 
Improve CO2 calculations

Slides: https://speakerdeck.com/meiradania/good-food-presentation-gs1-hackathon-2020-09-19-b9808cb9-ab13-4925-bebe-ff545e5220e3
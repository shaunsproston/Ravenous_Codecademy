const apiKey = "bjQ1sATpOkte2UjgQd3NNsadCESQK63dC8Qy3FaYRNtmb9228l2e0XP9waIZNTko0qvdIQQCG0H1HB7VPYvRNt7Eh5ExW8me7Raxtl2enYU0bxqgtMc9BTfQSmDoXHYx";

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if(jsonResponse.businesses){
         return jsonResponse.businesses.map(((business) => {
           console.log(business);
           return {
             id: business.id,
             imageSrc: business.image_url,
             name: business.name,
             address: business.location.address1,
             city: business.location.city,
             state: business.location.state,
             zipCode: business.location.zip_code,
             category: business.categories[0].title,
             rating: business.rating,
             reviewCount: business.review_count
           };
         }));
      }
    })
  }
};

export default Yelp;

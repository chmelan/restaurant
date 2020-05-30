const renderInitialLoad = (element)=>{
    element.innerHTML = `
<div class="bodyPageTitle">
<h1>Elmer's Eggselent Emporium</h1>
<h2>You need eggs? We have eggs. So many eggs.</h2>
</div>
<div class="reviewContainer">
    <div class="reviewEgg">
        <div class="reviewText">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <p>Wow! Abslutely eggceptional customer service!<br>-Suzie </p>
        </div>
    </div>
    <div class="reviewEgg">
        <div class="reviewText">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <p>The owner was too eggcentric for me.<br>-Greg</p>
        </div>
    </div>
    <div class="reviewEgg">
        <div class="reviewText">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <img class="eggRating" src="https://image.flaticon.com/icons/png/512/44/44506.png">
            <p>It's eggactly what you'd expect.<br>-Nik </p>
        </div>
    </div>
</div>`
}
export {renderInitialLoad}
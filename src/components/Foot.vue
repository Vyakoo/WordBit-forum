<template>
    <footer >
        <div class="container">
            <div class="d-flex justify-content-between">
                <span>
                    <img src="../assets/icon.jpg" alt="Logo" id="logo" class="d-inline-block">
                    <h2 class="d-inline-block">Vyakoo</h2>
                </span>
                <span>
                    <img src="../assets/icons/ic_tg_outline.png" alt="Logo" id="cellNetwork" class="d-inline-block">
                    <img src="../assets/icons/ic_vk_outline.png" alt="Logo" id="cellNetwork" class="d-inline-block">
                </span>
            </div>
            <hr>
            <div id="terns">
                <p>Используя сайт вы соглашаетесь с <a href="">пользовательским соглашением</a> сайта.</p>
                <p>ООО Vyakoo.ru 2023-2024</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #323030;
    width: 100vw;
    position: relative;
    z-index: 10;
}
#logo {
    width: 100px;
    height: auto;
    margin: 10px;
    border-radius: 50%;
}

#cellNetwork {
    background-color: black;
    margin: 10px;
    height: auto;
    width: 6vw;
    min-width: 75px;
    max-width: 100px;
    transition: all 0.5s ease;
    border-radius: 50%;
}

#cellNetwork:nth-child(1):hover {
    background-color: rgb(98, 159, 182);
}

#cellNetwork:nth-child(2):hover {
    background-color: rgb(68, 116, 167);
}

#terns {
    font-size: 0.8rem;
}

#terns p {
    margin: 0;
    padding: 4px;
}
</style>
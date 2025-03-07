document.addEventListener('DOMContentLoaded', function() {
    const facts = document.querySelectorAll('#rat-facts li');

    facts.forEach(fact => {
        fact.addEventListener('click', function() {
            this.classList.toggle('highlight');
        });
    });
});
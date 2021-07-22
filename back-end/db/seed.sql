\c coffees_db;
INSERT INTO coffees (name, price, origin, method, url, alt)
VALUES (
        'Home Brew',
        13.75,
        'Columbia, Kenya',
        'Drip',
        'https://i.ibb.co/Z8jt9zk/Dark-roast.png',
        'dark-roast'
    ),
    (
        'Express-o',
        16.50,
        'Brazil',
        'Espresso',
        'https://i.ibb.co/FgM8Kg3/light-roast.png',
        'light-roast'
    ),
    (
        'React Energy',
        5.00,
        'Ecuador',
        'Energy Drink',
        'https://i.ibb.co/7YpShSr/Lighter-background-React-Energy.png',
        'react-energy'
    ),
    (
        '\c Caffeine',
        15.00,
        'Ethiopia',
        'Cold Brew',
        'https://i.ibb.co/sF1QTHG/medium-roast.png',
        'medium-roast'
    ),
    (
        'require("Java")',
        14.25,
        'Rwanda',
        'Drip',
        'https://i.ibb.co/RSzq0zq/Java-Script-Capsules-Dark-Roast.png',
        'dark-roast-cup'
    ),
    (
        'alert("WAKE UP")',
        25.00,
        'Vietnam',
        'Espresso',
        'https://i.ibb.co/BfdZ2fJ/Java-Script-Capsules-Light-Roast.png',
        'light-roast-cup'
    ),
    (
        'Coffee.filter()',
        22.00,
        'Colombia',
        'Drip',
        'https://i.ibb.co/3mxCPdB/Bag-Packaging-12.png',
        'drip coffee'
    ),
    (
        'setBeans({})',
        12.00,
        'Honduras',
        'Instant',
        'https://i.ibb.co/3WfjrXV/SetBeans.png',
        'setBeans instant'
    ),
    (
        '<input le coffee/>',
        19.75,
        'Guatemala',
        'Cold Brew',
        'https://i.ibb.co/dKkS6Cz/Java-Script-Capsules-Medium-Roast.png',
        'medium-roast-cup'
    );

INSERT INTO reviews (coffee_id, reviewer, content, rating) VALUES
('1', 'Sara', 'Delicious!', 5),
('2', 'Brandon', 'I hate this coffee!', 0),
('2', 'Karen', 'Disgusting!', 5),
('3', 'Brenda', 'I couldn''t sleep. It does it''s job!', 5),
('4', 'John', 'I love the packaging! It''s lux', 4),
('5', 'Nick', 'Better than K-Cups!', 4),
('4', 'Mike', 'Meh, I prefer Starbucks', 2),
('6', 'Elsa', 'Let it go', 1),
('6', 'Moana', 'Yum!', 4),
('7', 'Lilo', 'Keeps me energized.', 5),
('8', 'Anon', 'this.state = "awake"', 4),
('9', 'Ash Ketchum', 'After all these years, I''m still 10 years old', 0),
('9', 'Marissa', 'Omg! GOAT', 5);

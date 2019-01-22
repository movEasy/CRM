








describe('sample test 101', () => {
    // you can either use the test() or it() command, they are the same thing.
    it('works as expected', () => {
        // inside of each it block is where we are going to put each expect block
        // you can put as many expects in here as you want
        const age = 100;
        expect(1).toEqual(1);
        expect(age).toEqual(100);
    });
    // when you need to test something else about a component, you use a new it block
    it('handles ranges just fine', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
    });
    // when we want to only run one of these test we can use .only, and it will skip the others
    it.only('makes a list of dog names', () => {
        const dogs = ['snickers', 'hugo'];
        expect(dogs).toEqual(dogs);
        expect(dogs).toContain('snickers');
    });
    // when we want to skip one of these test we can use .skip, and it will skip that one
    it.skip('makes a list of dog names', () => {
        const dogs = ['snickers', 'hugo'];
        expect(dogs).toEqual(dogs);
        expect(dogs).toContain('snickers');
    })
})

import formatMoney from 'whatever-src';

describe('formatMoney function', () => {
    it('works with fractional dollars', ( )=> {
        expect(formatMoney(1)).toEqual('$0.01');
        expect(formatMoney(10)).toEqual('$0.10');
        expect(formatMoney(9)).toEqual('$0.09');
        expect(formatMoney(40)).toEqual('$0.40');
    });

    it('leaves cents off for whole dollars', () => {
        expect(formatMoney(5000)).toEqual('$50');
        expect(formatMoney(100)).toEqual('$1');
        expect(formatMoney(50000000)).toEqual('$500,000');
    });

    it('works with whole and fractional dollars', () => {
        expect(formatMoney(5012)).toEqual('$50.12');
        expect(formatMoney(101)).toEqual('$1.01');
        expect(formatMoney(110)).toEqual('$1.10');
    })
})


function Person(name, foods) {
    this.name = name;
    this.foods = foods;
}

// fake end point
Person.prototype.fetchFavFoods = () => {
    new Promise((resolve, reject) => {
        // simulate an API
        setTimeout(() => resolve(this.foods), 2000);
    });
}

describe('mocking learning', () => {
    it('mocks a reg function', () => {
        // example of a function that hits an external endpoint, that we want to override with a mock function
        const fetchDogs = jest.fn();
        // call the mock function
        fetchDogs();
        expect(fetchDogs).toHaveBeenCalled();
        expect(fetchDogs).toHaveBeenCalledWith('snickers');
        expect(fetchDogs).toHaveBeenCalledTimes(2);
    });

    it('can create a person', () => {
        const me = new Person('Wes', ['Pizza', 'burgs']);
        expect(me.name).toBe('Wes');
    });

    it('can fetch foods', () => {
        const me = new Person('Wes', ['Pizza', 'burgs']);
        // mock the favFoods function
        me.fetchFavFoods = jest.().mockResolvedValue(['sushi', 'ramen']);
        const favFoods = await me.fetchFavFoods();
        console.log(favFoods);
        expect(favFoods).toContain('sushi');
    });
    
});
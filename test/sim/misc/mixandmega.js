'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Mix and Mega', function () {
	beforeEach(function () {
		battle = common.createBattle({formatid: 'gen9mixandmega'});
	});
	afterEach(() => battle.destroy());

	it('should overwrite forme-change abilities on Mega Evolution', function () {
		battle.setPlayer('p1', {team: [{species: "Mimikyu", ability: 'disguise', item: 'metagrossite', moves: ['shadowclaw']}]});
		battle.setPlayer('p2', {team: [{species: "Palafin", ability: 'zerotohero', item: 'leftovers', moves: ['jetpunch']}]});
		battle.makeChoices('default', 'default'); // Switch in
		battle.makeChoices('move shadowclaw mega', 'move uturn');
		assert.equal(battle.p1.active[0].ability, 'toughclaws');
	});
});

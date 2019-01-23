class Mapper {
	constructor() {
		this.maps = {
			'{% if': this._action('REPLACE', ['<isif condition="${'], 'if'),
			'{% else %}': this._action('REPLACE', ['<iselse />']),
			'{% elseif': this._action('REPLACE', ['<iselseif condition="${'], 'if'),
			'app.': this._action('REPLACE', ['']),
			'==': this._action('REPLACE', ['===']),
			'{% endif %}': this._action('REPLACE', ['</isif>']),
			'onclick': this._action('REPLACE', ['onClick']),
			' not ': this._action('REPLACE', ['!']),
			' and ': this._action('REPLACE', [' && ']),
			' or ': this._action('REPLACE', [' || ']),
			'{#': this._action('REPLACE', ['']),
			'#}': this._action('REPLACE', ['']),
			'{{ ': this._action('REPLACE', ['${']),
			' }}': this._action('REPLACE', ['}']),
			'|join': this._action('REPLACE', ['.join']),
			'%}': this._action('REPLACE', ['[CLOSE_TAG]']),
			'for=': this._action('REPLACE', ['htmlFor=']),
			'{% include': this._action('REPLACE', ['<!-- include template :'], 'include')
		}
	}

	map(key) {
		return this.maps[key];
	}

	iterator() {
		return Object.keys(this.maps);
	}

	_action(action, args = [], opening_tag = false) {
		return {
			action,
			args,
			opening_tag
		};
	}
}

module.exports = Mapper;

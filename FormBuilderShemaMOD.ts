import {Transformers} from '@duesseldorf-digital/forest_core';

export const formBuilderSchema = () => {
	return {
		basic: false,
		resource: false,
		advanced: false,
		data: false,
		premium: false,
		layout: false,
		inputData: {
			default: false,
			title: 'Input data',
			components: Transformers.SchemaSetWeight({
				textfield: Transformers.SchemaTransform('textfield', {
					title: 'Text Feld',
					schema: {
							label: "Text Feld"  
					}
				}),
				textarea: Transformers.SchemaTransform('textarea', {
					title: 'Mehrzeiliges Text Feld',
					schema: {
							label: "Mehrzeiliges Text Feld"  
					}
				}),
				number: Transformers.SchemaTransform('number', {
					title: 'Nummer',
					schema: {
							label: "Nummer"  
					}
				}),
				phone_number: Transformers.SchemaTransform('phoneNumber', {
					title: 'Telefonnummer',
					key: 'phone_number',
					icon: 'phone',
					schema: {
						label: 'Telefonnummer',
						key: 'phone_number',
						validate: {
							pattern: '[\\+\\-][\\d\\ \\-]+'
						}
					}
				}),
				file: Transformers.SchemaTransform('file', {
					title: 'Datei-Upload',
					schema: {
							label: "Datei-Upload"  
					}
				}),
				checkbox: true,
				selectboxes: Transformers.SchemaTransform('selectboxes', {
					title: 'Mehrfachauswahl',
					schema: {
							label: "Mehrfachauswahl"  
					}
				}),
				htmlform: true,
				select:Transformers.SchemaTransform('select', {
					title: 'Auswahlliste',
					schema: {
							label: "Auswahlliste"  
					}
				}),
				radio: Transformers.SchemaTransform('radio', {
					title: 'Optionsfeld',
					schema: {
							label: "Optionsfeld"  
					}
				}),
				email: true,
				url: true,
				day: Transformers.SchemaTransform('day', {
					title: 'form.builder.day.title',
					schema: {
						fields: {
							day: {
								hide: false
							},
							month: {
								type: 'number',
								hide: false
							},
							year: {
								hide: false
							}
						},
						dayFirst: true
					}
				}),
				time: Transformers.SchemaTransform('time', {
					title: 'Uhr Zeit',
					schema: {
							label: "Uhr Zeit"  
					}
				}),
				currency: Transformers.SchemaTransform('currency', {
					icon: 'euro',
					schema: {
						currency: 'EUR'
					}
				}),
				signature: Transformers.SchemaTransform('signature', {
					title: 'Unterschrift',
					schema: {
							label: "Unterschrift"  
					}
				}),
			})
		},
		blueprints: {
			title: 'Blueprints',
			components: Transformers.SchemaSetWeight({
				backButton: Transformers.SchemaTransform('button', {
					title: 'Back-Button',
					key: 'back_button',
					icon: 'arrow-left',
					schema: {
						label: 'Zurück-Button',
						action: 'event',
						customClass: 'btn-back',
						key: 'back-button',
						event: 'gotoPreviousPage'
					}
				}),
				abschluss: Transformers.SchemaTransform('content', {
					title: 'Abshlussseite',
					schema: {
						key: 'abschluss',
						customClass: 'abschluss',
						hidden: true
					}
				}),
				uniqueid: Transformers.SchemaTransform('uniqueid', {
					title: 'Fall-ID',
					schema: {
							label: "Fall-ID"  
					}
				}),
			})
		},
		design: {
			title: 'Design',
			components: Transformers.SchemaSetWeight({
				content: true,
				panel: true,
				fieldset: true,
				well: true,
				columns: true,
				table: Transformers.SchemaTransform('table', {
					title: 'Tabelle',
					schema: {
							label: "Tabelle"  
					}
				}),
				tabs: true,
				panelGreen: Transformers.SchemaTransform('panel', {
					title: 'Notice Grey',
					schema: {
						customClass: 'box-info',
						buttonSettings: {
							previous: true,
							cancel: true,
							next: true,
							label: 'Info'
						}
					}
				}),
				panelRed: Transformers.SchemaTransform('panel', {
					title: 'Notice Red',
					schema: {
						customClass: 'box-danger',
						buttonSettings: {
							previous: false,
							cancel: true,
							next: false,
							label: 'Attention'
						}
					}
				}),
				panelYellow: Transformers.SchemaTransform('panel', {
					title: 'Notice Yellow',
					schema: {
						customClass: 'box-warning',
						buttonSettings: {
							previous: true,
							cancel: true,
							next: true,
							label: 'Warning'
						}
					}
				})
			})
		}
	};
};

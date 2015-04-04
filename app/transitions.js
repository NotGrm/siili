export default function(){
  this.transition(
    this.hasClass('actions'),

    this.toValue(true),
    this.use('toDown'),

    this.reverse('fade')
  );

  this.transition(
    this.childOf('.row__actions'),

    this.toValue(true),
    this.use('explode', {
      pickOld: 'span',
      use: ['crossFade']
    }, {
      use: ['toLeft']
    }),

    this.reverse('explode', {
      pickOld: 'div',
      use: ['crossFade']
    }, {
      use: ['toRight', 'fade']
    })
  )
};

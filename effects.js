
		(function() {
			/*
			How to use the plugin:
			
			// Initialize
			var txt = new TextFx(this.el.querySelector('.title'));
			
			// Show letters: 
			// txt.show([effect] [,callback]);
			// If nothing is passed, then no animation.
			// ´effect´ can either be one of the predefined effects: ['fx1',...,'fx17'] or a object literal representing both in and out animations (anime.js based):
			// example:
			effect = {
				in: {
					duration: 500,
					delay: function(el, index) { 
						return 250+index*40; 
					},
					easing: 'easeOutExpo',
					opacity: 1,
					translateY: ['50%','0%']
				},
				out: {
					duration: 500,
					delay: function(el, index) { 
						return index*40; 
					},
					easing: 'easeOutExpo',
					opacity: 0,
					translateY: '-50%'
				}
			}
			// ´callback´ is the callback function, after all the letters finish the animation.
			
			// Hide letters: 
			// txt.hide([effect] [,callback]); (same logic of show)
			 */
			
			// For demo purposes only:
			// Let´s build a simple slideshow to exemplify the TextFx plugin:
			
			// Body element. 
			var bodyEl = document.body;
			// Preload all images..
			imagesLoaded(bodyEl, { background: true }, function() {
				bodyEl.classList.remove('loading');
			});
			
			// Slide obj: each Slideshow´s slide will contain the HTML element and the instance of TextFx.
			var Slide = function(el) {
					this.el = el;
					this.txt = new TextFx(this.el.querySelector('.title'));
				},
				// The Slideshow obj.
				Slideshow = function(el) {
					this.el = el;
					this.current = 0;
					this.slides = [];
					var self = this;
					[].slice.call(this.el.querySelectorAll('.slide')).forEach(function(slide) {
						self.slides.push(new Slide(slide));
					});
					this.slidesTotal = this.slides.length;
					this.effect = this.el.getAttribute('data-effect');
				};

			Slideshow.prototype._navigate = function(direction) {
				if( this.isAnimating ) {
					return false;
				}
				this.isAnimating = true;

				var self = this, currentSlide = this.slides[this.current];

				this.current = direction === 'next' ? (this.current < this.slidesTotal - 1 ? this.current + 1 : 0) : (this.current = this.current > 0 ? this.current - 1 : this.slidesTotal - 1);
				var nextSlide = this.slides[this.current];

				var checkEndCnt = 0, checkEnd = function() {
					++checkEndCnt;
					if( checkEndCnt === 2 ) {
						currentSlide.el.classList.remove('slide--current');
						nextSlide.el.classList.add('slide--current');
						self.isAnimating = false;
					}
				};
				
				// Call the TextFx hide method and pass the effect string defined in the data-effect attribute of the Slideshow element.
				currentSlide.txt.hide(this.effect, function() {
					currentSlide.el.style.opacity = 0;
					checkEnd();
				});
				// First hide the next slide´s TextFx text.
				nextSlide.txt.hide();
				nextSlide.el.style.opacity = 1;
				// And now call the TextFx show method.
				
				nextSlide.txt.show(this.effect, function() {
					checkEnd();
				});
			};

			Slideshow.prototype.next = function() { this._navigate('next'); };

			Slideshow.prototype.prev = function() { this._navigate('prev');	};

			function getDecoColor(pos) {
				switch(pos) {
					case 0 : return '#d9d9e0'; break;
					case 2 : return '#171412'; break;
					case 6 : return '#87d6b5'; break;
					case 11 : return '#CBD6CB'; break;
					case 13 : return '#F1D50E'; break;
					case 14 : return '#52CA67'; break;
					default : return '#fff'; break;
				};
			}

			[].slice.call(document.querySelectorAll('.content')).forEach(function(el, pos) {
				var slideshow = new Slideshow(el.querySelector('.slideshow'));
				el.querySelector('.actions').firstElementChild.addEventListener('click', function() { slideshow.prev(); });
				el.querySelector('.actions').lastElementChild.addEventListener('click', function() { slideshow.next(); });

				if( pos === 0 || pos === 2 || pos === 6 || pos === 11 || pos === 13 || pos === 14 ) {
					var decoColor = getDecoColor(pos);
					new LineMaker({
						parent: {element: el, position: 'prepend'},
						lines: pos % 2 === 0 ? [
								{top: 0, left: '6%', width: 1, height: '100vh', color: decoColor},
								{top: 0, left: '26%', width: 1, height: '100vh', color: decoColor},
								{top: 0, left: '46%', width: 1, height: '100vh', color: decoColor},
								{top: 0, left: '66%', width: 1, height: '100vh', color: decoColor},
								{top: 0, left: '86%', width: 1, height: '100vh', color: decoColor}
							] : [
								{top: '20%', left: 0, width: '100vw', height: 1, color: decoColor},
								{top: '40%', left: 0, width: '100vw', height: 1, color: decoColor},
								{top: '60%', left: 0, width: '100vw', height: 1, color: decoColor},
								{top: '80%', left: 0, width: '100vw', height: 1, color: decoColor}
							]
					});
				}
			});
			
			// Credits Modal:
			var modal = document.querySelector('.modal'),
				modalOverlay = modal.querySelector('.modal__overlay'),
				modalCloseCtrl = modal.querySelector('.modal__action'),
				modalContent = modal.querySelector('.modal__content'),
				inner = modal.querySelector('.modal__text').children;
			
			modalContent.style.WebkitTransform = modalContent.style.transform = 'scale3d(1,0,1)';
			modalCloseCtrl.style.opacity = 0;
			[].slice.call(inner).forEach(function(el) {
				el.style.opacity = 0;
			})
			
			// bezier function: https://github.com/arian/cubic-bezier
			function bezier(x1, y1, x2, y2, epsilon) {
				var curveX = function(t){
					var v = 1 - t;
					return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
				};

				var curveY = function(t){
					var v = 1 - t;
					return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
				};

				var derivativeCurveX = function(t){
					var v = 1 - t;
					return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
				};

				return function(t){

					var x = t, t0, t1, t2, x2, d2, i;

					// First try a few iterations of Newton's method -- normally very fast.
					for (t2 = x, i = 0; i < 8; i++){
						x2 = curveX(t2) - x;
						if (Math.abs(x2) < epsilon) return curveY(t2);
						d2 = derivativeCurveX(t2);
						if (Math.abs(d2) < 1e-6) break;
						t2 = t2 - x2 / d2;
					}

					t0 = 0, t1 = 1, t2 = x;

					if (t2 < t0) return curveY(t0);
					if (t2 > t1) return curveY(t1);

					// Fallback to the bisection method for reliability.
					while (t0 < t1){
						x2 = curveX(t2);
						if (Math.abs(x2 - x) < epsilon) return curveY(t2);
						if (x > x2) t0 = t2;
						else t1 = t2;
						t2 = (t1 - t0) * .5 + t0;
					}

					// Failure
					return curveY(t2);

				};
			};
			
			var duration = 500, epsilon = (1000 / 60 / duration) / 4, easing1 = bezier(0.1, 1, 0.9, 1, epsilon);
			anime.easings['myCustomEasing'] = function(t){ return easing1(t); };

			function openCredits() {
				modal.classList.remove('modal--closed');
				anime({
					targets: modalOverlay,
					duration: duration,
					easing: 'myCustomEasing',
					opacity: [0,1]
				});
				anime({
					targets: modalContent,
					duration: duration,
					easing: 'myCustomEasing',
					scaleY: [0,1]
				});
				anime({
					targets: modalCloseCtrl,
					duration: 200,
					delay: 300,
					easing: 'easeOutExpo',
					opacity: [0,1]
				});
				anime({
					targets: inner,
					duration: 800,
					delay: function(el, index) { return 250+index*70; },
					opacity: {
						easing: 'linear',
						value: [0, 1]
					},
					translateY: {
						easing: 'easeOutExpo',
						value: [30, 0]
					}
				});
			}

			function closeCredits() {
				modal.classList.add('modal--closed');
			}

			document.querySelector('.btn--modal-trigger').addEventListener('click', openCredits);
			modalCloseCtrl.addEventListener('click', closeCredits);

			var paterEl = document.querySelector('.pater'),
				pater = new TextFx(paterEl.querySelector('.pater__title')),
				fxPater = {
					in: {
						duration: 400,
						delay: function(el, index) { return 50+index*20; },
						easing: 'easeOutExpo',
						opacity: 1,
						translateY: ['50%','0%']
					},
					out: {
						duration: 400,
						delay: function(el, index) { 
							return index*20; 
						},
						easing: 'easeOutExpo',
						opacity: 0,
						translateY: '-50%'
					}
				};
			
			paterEl.addEventListener('mouseenter', function() {
				pater.hide();
				setTimeout(function() {
					pater.show(fxPater);	
				},60);
			});
			paterEl.addEventListener('mouseleave', function() {
				pater.show();
			});
		})();
	
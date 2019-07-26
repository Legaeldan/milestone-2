describe('Main control control button functions', function() {
  
    beforeEach(() => {

        spyEvent = spyOnEvent(".speedControl", 'click');
        setFixtures(`
        <button type="button" class="btn btn-success speedControl mainControls" id="easy"></button>
        <button type="button" class="btn btn-danger speedControl mainControls" id="easy"></button>
        <button type="button" class="btn btn-success speedControl mainControls" id="medium"></button>
        <button type="button" class="btn btn-danger speedControl mainControls" id="medium"></button>
        <button type="button" class="btn btn-success speedControl mainControls" id="hard"></button>
        <button type="button" class="btn btn-danger speedControl mainControls" id="hard"></button>
        
        `)
    });

    describe('on click easy difficulty button', function() {
        it('should remove class "btn-success" from current clicked button', function() {
            $("#easy").addClass("btn-danger").removeClass("btn-success").siblings().removeClass("btn-danger").addClass("btn-success");
            expect($("#easy").hasClass('btn-success')).toBe(false);
        });
        it('should add class "btn-danger" to current clicked button', function() {
            $("#easy").addClass("btn-danger").removeClass("btn-success").siblings().removeClass("btn-danger").addClass("btn-success");
            expect($("#easy")).toHaveClass('btn-danger');
        });
        it('should change tempo to current setting', function() {
            tempo = eval(easy);
            expect(tempo).toEqual(easy);
        });
    });

        describe('on click medium difficulty button', function() {
            it('should remove class "btn-success" from current clicked button', function() {
                $("#medium").addClass("btn-danger").removeClass("btn-success").siblings().removeClass("btn-danger").addClass("btn-success");
                expect($("#medium").hasClass('btn-success')).toBe(false);
            });
            it('should add class "btn-danger" to current clicked button', function() {
                $("#medium").addClass("btn-danger").removeClass("btn-success").siblings().removeClass("btn-danger").addClass("btn-success");
                expect($("#medium")).toHaveClass('btn-danger');
            });
            it('should change tempo to current setting', function() {
                tempo = eval(medium);
                expect(tempo).toEqual(medium);
            });

        });
            describe('on click hard difficulty button', function() {
                it('should remove class "btn-success" from current clicked button', function() {
                    $("#hard").addClass("btn-danger").removeClass("btn-success").siblings().removeClass("btn-danger").addClass("btn-success");
                    expect($("#hard").hasClass('btn-success')).toBe(false);
                });
                it('should add class "btn-danger" to current clicked button', function() {
                    $("#hard").addClass("btn-danger").removeClass("btn-success").siblings().removeClass("btn-danger").addClass("btn-success");
                    expect($("#hard")).toHaveClass('btn-danger');
                });
                it('should change tempo to current setting', function() {
                    tempo = eval(hard);
                    expect(tempo).toEqual(hard);
                });
            });
 
    });



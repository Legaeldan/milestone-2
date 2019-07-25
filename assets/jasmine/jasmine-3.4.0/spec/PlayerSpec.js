describe('Main control control button functions', function() {
    
    var spyEvent = spyOnEvent(this.id, 'click')

    beforeEach(() => {
        spyEvent = spyOnEvent(this.id, 'click');
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
            $("#easy").trigger("click");
            expect($("#easy")).toHaveClass('btn-success');
        });
        it('should add class "btn-danger" to current clicked button', function() {
            $("#easy").trigger("click");
            expect($("#easy")).not.toHaveClass('btn-danger');
        });
        it('should change tempo to current setting', function() {
            $("#easy").trigger("click");
            expect(tempo).toEqual(easy);
        });
    });

        describe('on click medium difficulty button', function() {
            it('should remove class "btn-success" from current clicked button', function() {
                $("#medium").trigger("click");
                expect($("#medium")).toHaveClass('btn-success');
            });
            it('should add class "btn-danger" to current clicked button', function() {
                $("#medium").trigger("click");
                expect($("#medium")).not.toHaveClass('btn-danger');
            });
            it('should change tempo to current setting', function() {
                $("#medium").trigger("click");
                expect(tempo).toEqual(medium);
            });

        });
            describe('on click hard difficulty button', function() {
                it('should remove class "btn-success" from current clicked button', function() {
                    $("#hard").trigger("click");
                    expect($("#hard")).toHaveClass('btn-success');
                });
                it('should add class "btn-danger" to current clicked button', function() {
                    $("#hard").trigger("click");
                    expect($("#hard")).not.toHaveClass('btn-danger');
                });
                it('should change tempo to current setting', function() {
                    speedControl();
                    expect(tempo).toEqual(hard);
                });
            });
 
    });



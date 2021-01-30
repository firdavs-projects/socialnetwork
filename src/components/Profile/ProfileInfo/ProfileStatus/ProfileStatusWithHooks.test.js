import React from "react";
import { create } from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatusComponent", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Yooo" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Yooo");
    });

    test("span will be display", () => {
        const component = create(<ProfileStatus status="Yooo" />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });

    test("input should to be null", () => {
        const component = create(<ProfileStatus status="Yooo" />);
        const instance = component.root;
        expect(() => {
            instance.findByType("input");
        }).toThrow();
    });

    test("span will contains correct status", () => {
        const component = create(<ProfileStatus status="Yooo" />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[0]).toBe("Yooo");
    });

    test("input should be display in editMode", () => {
        const component = create(<ProfileStatus status="Yooo" />);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.onClick();
        const input = instance.findByType("input");
        expect(input.props.value).toBe("Yooo");
    });

    test("callBack should be called", () => {
        const mockCallBack = jest.fn()
        const component = create(<ProfileStatus status="Yooo" updateStatus={mockCallBack} />);
        const instance = component.getInstance();
        instance.deactiveEditMode()
        expect(mockCallBack.mock.calls[0].length).toBe(1);
    });
});
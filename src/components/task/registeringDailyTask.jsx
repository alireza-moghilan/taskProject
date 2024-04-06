// import
import { useState } from 'react';
import { FormAddTask } from './form/formAddTask';
import { SectionTaskCard } from './sectionTaskCard';
export const RegisteringDailyTask = () => {
    return (
        <>
            <div>
                <div>
                    <FormAddTask />
                </div>
                <div>
                    <SectionTaskCard />
                </div>
            </div>
        </>
    )
}